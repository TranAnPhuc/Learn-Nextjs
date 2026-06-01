import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">AI Q&A App</h1>
      <p className="text-gray-500 mb-8">Quention Anything, AI repley now!</p>
      <Link href="/history" className="text-blue-500 underline">
        View History
      </Link>
    </main>
  );
}
