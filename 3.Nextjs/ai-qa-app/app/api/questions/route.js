// GET /api/questions?minView=50
export async function GET(request) {
  const list = [
    { id: 1, title: "Next.js là gì?", view: 120 },
    { id: 2, title: "Prisma dùng thế nào?", view: 45 },
    { id: 3, title: "SQL Server là gì?", view: 89 },
  ];
  const { searchParams } = new URL(request.url);
  const minView = parseInt(searchParams.get("minView")) || 0;

  const listMinView = list.filter((i) => i.view >= minView);

  return Response.json(listMinView);
}

// POST /api/questions
export async function POST(request) {
  const body = await request.json();
  console.log("Nhan duoc:", body);

  const newQuestion = {
    id: Date.now(),
    title: body.title,
    view: 0,
  };

  return Response.json(newQuestion, { status: 201 });
}
