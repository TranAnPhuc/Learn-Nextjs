import logo from "./logo.svg";
import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import "./App.css";

function App() {
  const [key, setKey] = useState("");
  const [listQuestion, setListQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    const getValue = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6",
      );
      const data = await response.json();
      const newList = data.map((question) => ({
        id: question.id,
        title: question.title,
        view: question.id * 17,
      }));
      setListQuestion(newList);
      setLoading(false);
    };
    getValue();
  }, []);

  let maxId = Math.max(...listQuestion.map((question) => question.id));

  // Filter list by key
  // const filterResult = listQuestion.filter((question) =>
  //   question.title.toLowerCase().includes(key.toLocaleLowerCase()),
  // );

  // Add new question
  // const addNewQuestion = () => {
  //   const newId = maxId + 1;
  //   const questionToAdd = { id: newId, title: newQuestion, view: 100 };
  //   setListQuestion([...listQuestion, questionToAdd]);
  //   setNewQuestion("");
  // };

  if (loading === true) return <div>Loading...</div>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>AI Q&A App</h1>

      {/* <input
        type="text"
        placeholder="Find the result..."
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "1rem",
          fontSize: "16px",
        }}
      ></input> */}

      {/* <p>Add new question</p>
      <input
        type="text"
        id="inputNewQuestion"
        placeholder="Input new question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "1rem",
          fontSize: "16px",
        }}
      ></input> */}

      {/* <button
        style={{
          backgroundColor: "#8fce00",
          borderRadius: "10px",
          padding: "10px",
          width: "70px",
          border: "1px solid transparent",
          cursor: "pointer",
        }}
        onClick={addNewQuestion}
      >
        Add
      </button> */}

      {/* <p style={{ color: "#666" }}>Find the {filterResult.length} question</p> */}

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
