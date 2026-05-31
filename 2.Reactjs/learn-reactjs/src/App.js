import logo from "./logo.svg";
import QuestionCard from "./QuestionCard";
import "./App.css";

function App() {
  const listQuestion = [
    { id: 1, title: "Next.js là gì?", view: 120 },
    { id: 2, title: "Prisma dùng thế nào?", view: 45 },
    { id: 3, title: "SQL Server là gì?", view: 89 },
    { id: 4, title: "Tailwind CSS là gì?", view: 210 },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Q&A App</h1>

      {listQuestion.map((quest) => (
        <QuestionCard
          key={quest.id}
          title={quest.title}
          view={quest.view}
        ></QuestionCard>
      ))}
    </div>
  );
}

export default App;
