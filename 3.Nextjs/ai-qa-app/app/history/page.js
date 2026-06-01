async function getList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  return res.json();
}

export default async function HistoryPage() {
  const list = await getList();

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">History Q&A</h1>
      {list.map((post) => (
        <div key={post.id} className="border rounded p-4 mb-3">
          <p className="font-medium">{post.title}</p>
        </div>
      ))}
    </main>
  );
}
