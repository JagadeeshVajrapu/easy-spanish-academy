import { NextResponse } from "next/server";
import { listPublishedBlogs } from "@/lib/blog-service";

export async function GET() {
  try {
    const blogs = await listPublishedBlogs();
    return NextResponse.json({ blogs });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load blogs.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
