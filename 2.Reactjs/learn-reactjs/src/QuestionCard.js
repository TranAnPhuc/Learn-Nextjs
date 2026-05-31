function QuestionCard({ title, view }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p style={{ color: "#666" }}>View: {view}</p>
    </div>
  );
}

export default QuestionCard;
