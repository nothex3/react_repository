import { useState, useEffect } from "react";
import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constans";
// import cls from "./HomePage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const responce = await fetch(`${API_URL}/react`);
        const questions = await responce.json();

        setQuestions(questions);

        console.log("questions", questions);
      } catch (error) {
        console.error(error);
      }
    };
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((card, index) => {
        return <QuestionCard card={card} key={index} />;
      })}
    </>
  );
};
