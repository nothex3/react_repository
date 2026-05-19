import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import cls from "./QuestionCard.module.css";

export const QuestionCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>Level: {props.card.level}</div>
        <div>{props.card.completed ? "Completed" : "Not Completed"}</div>
      </div>

      <h5 className={cls.cardTitle}>{props.card.question}</h5>

      <div className={cls.cardAnswers}>
        <label>short answer: </label>
        <p className={cls.cardAnswer}>{props.card.answer}</p>
      </div>

      <Button onClick={() => navigate(`/question/${props.card.id}`)}>View</Button>
    </div>
  );
};
