import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { getAdminSession } from "@/lib/admin-auth";
import { createBlog, listAdminBlogs, serializeBlog } from "@/lib/blog-service";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const blogs = await listAdminBlogs();
  return NextResponse.json({
    blogs: blogs.map((blog) => ({
      ...serializeBlog(blog),
      status: blog.status,
    })),
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const blog = await createBlog(body, session.sub);
    return NextResponse.json(
      { blog: { ...serializeBlog(blog), status: blog.status } },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message ?? "Invalid blog data." },
        { status: 400 },
      );
    }
    const message = error instanceof Error ? error.message : "Could not create blog.";
    const status = message.includes("slug") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
