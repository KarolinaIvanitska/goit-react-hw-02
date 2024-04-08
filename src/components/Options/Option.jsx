const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className="container-options">
      <button onClick={() => updateFeedback("good")}>Good </button>
      <button onClick={() => updateFeedback("neutral")}>Neutral </button>
      <button onClick={() => updateFeedback("bad")}>Bad Opinion</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;