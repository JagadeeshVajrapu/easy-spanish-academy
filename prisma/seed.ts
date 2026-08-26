import { BlogStatus, PrismaClient } from "@prisma/client";
import { BLOG_POSTS } from "../src/lib/blog-data";

const prisma = new PrismaClient();

async function main() {
  for (const post of BLOG_POSTS) {
    await prisma.blog.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: [
          `<p>${post.excerpt}</p>`,
          "<h2>What you will learn</h2>",
          "<ul>",
          ...post.outline.map((item) => `<li>${item}</li>`),
          "</ul>",
          `<p>Explore Spanish and German courses at Easy Spanish Academy to take the next step.</p>`,
        ].join(""),
        featuredImage: post.image,
        category: post.category,
        author: "Easy Spanish Academy",
        status: BlogStatus.PUBLISHED,
        publishedAt: new Date(post.date),
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: [
          `<p>${post.excerpt}</p>`,
          "<h2>What you will learn</h2>",
          "<ul>",
          ...post.outline.map((item) => `<li>${item}</li>`),
          "</ul>",
          `<p>Explore Spanish and German courses at Easy Spanish Academy to take the next step.</p>`,
        ].join(""),
        featuredImage: post.image,
        category: post.category,
        author: "Easy Spanish Academy",
        status: BlogStatus.PUBLISHED,
        publishedAt: new Date(post.date),
      },
    });
  }

  console.log(`Seeded ${BLOG_POSTS.length} published blogs.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
