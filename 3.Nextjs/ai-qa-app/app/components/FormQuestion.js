"use client";
import { useState } from "react";

export default function FormQuestion() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!title.trim()) return;
    setLoading(true);

    const res = await fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    setResult(data);
    setTitle("");
    setLoading(false);
  };

  return (
    <div className="mt-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhap cau hoi...."
        className="w-full border rounded p-2 mb-3"
      ></input>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Dang gui" : "Gui cau hoi"}
      </button>

      {result && <p className="mt-3 text-green-600">Da tao: {result.title}</p>}
    </div>
  );
}
