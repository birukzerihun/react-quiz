function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Wellcome to the React quiz!</h2>
      <h3>{numOfQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
