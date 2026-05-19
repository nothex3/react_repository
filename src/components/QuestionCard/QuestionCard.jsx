import { Button } from "../Button/Button";
import cls from "./QuestionCard.module.css";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>Level: 1</div>
        <div>Not Complited</div>
      </div>

      <h5 className={cls.cardTitle}>What is it?</h5>

      <div className={cls.cardAnswers}>
        <label>short answer: </label>
        <p className={cls.cardAnswer}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, porro.</p>
      </div>

      <Button onClick={() => {}}>View</Button>
    </div>
  );
};
