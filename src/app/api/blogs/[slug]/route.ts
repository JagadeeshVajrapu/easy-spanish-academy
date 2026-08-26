import { NextResponse } from "next/server";
import { getPublishedBlogBySlug } from "@/lib/blog-service";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  try {
    const blog = await getPublishedBlogBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }
    return NextResponse.json({ blog });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load blog.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
