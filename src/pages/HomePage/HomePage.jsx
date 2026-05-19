import { useState, useEffect } from "react";
import { API_URL } from "../../constans";
import { QuestionCardList } from "../../components/QuestionCardList";
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
      <QuestionCardList cards={questions} />
    </>
  );
};
