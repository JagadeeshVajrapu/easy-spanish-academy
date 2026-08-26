import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { getAdminSession } from "@/lib/admin-auth";
import {
  deleteBlog,
  getAdminBlogById,
  serializeBlog,
  setBlogStatus,
  updateBlog,
} from "@/lib/blog-service";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const blog = await getAdminBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }

  return NextResponse.json({
    blog: { ...serializeBlog(blog), status: blog.status },
  });
}

export async function PATCH(request: Request, context: RouteContext) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    const body = await request.json();

    if (body?.action === "publish") {
      const blog = await setBlogStatus(id, "PUBLISHED");
      return NextResponse.json({ blog: { ...serializeBlog(blog), status: blog.status } });
    }
    if (body?.action === "unpublish") {
      const blog = await setBlogStatus(id, "DRAFT");
      return NextResponse.json({ blog: { ...serializeBlog(blog), status: blog.status } });
    }

    const blog = await updateBlog(id, body);
    return NextResponse.json({ blog: { ...serializeBlog(blog), status: blog.status } });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message ?? "Invalid blog data." },
        { status: 400 },
      );
    }
    const message = error instanceof Error ? error.message : "Could not update blog.";
    const status =
      message === "Blog not found." ? 404 : message.includes("slug") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  try {
    await deleteBlog(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not delete blog.";
    const status = message === "Blog not found." ? 404 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
