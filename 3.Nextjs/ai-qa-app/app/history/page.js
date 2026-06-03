import { prisma } from "@/lib/prisma";

export default async function HistoryPage() {
  const list = await prisma.question.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">History Q&A</h1>
      {list.map((post) => (
        <div key={post.id} className="border rounded p-4 mb-3">
          <p className="font-medium">{post.title}</p>
          <p className="text-sm text-gray-400 mt-1">
            View: {post.view} - {post.createdAt.toLocaleDateString("vi-VN")}
          </p>
        </div>
      ))}
    </main>
  );
}
