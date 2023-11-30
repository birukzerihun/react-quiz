import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index } = useQuiz();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      {/* 
      //HE PASSED QUESITION TO OPTION AS PROPS BUT I DID IT DIFFERENTLY
      <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div> */}

      <Options />
    </div>
  );
}

export default Question;
