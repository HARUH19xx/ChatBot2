import React, { useState, useEffect } from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset';
import { AnswersList, Chats } from './components/index';
import FormDialog from './components/forms/FormDialog';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataSet, setDataSet] = useState(defaultDataset);
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId) => {
    const newChats = [...chats];
    newChats.push({
      text: dataSet[nextQuestionId].question,
      type: 'question',
    });

    // 「setChats(newChats)」にすると、配列の中身が変わる前に再レンダリングされてしまう。
    setChats(prevChats => [...prevChats, {
      text: dataSet[nextQuestionId].question,
      type: 'question',
    }]);
    setCurrentId(nextQuestionId);
    setAnswers(dataSet[nextQuestionId].answers);
  };

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === 'init':
        setTimeout(() => displayNextQuestion(nextQuestionId), 500);
        break;

      case /^https:*/.test(nextQuestionId):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;

      case nextQuestionId === "contact":
        setOpen(true);
        break;

      default:
        const newChats = [...chats];
        newChats.push({
          text: selectedAnswer,
          type: "answer",
        });

        // 「setChats(newChats)」にすると、配列の中身が変わる前に再レンダリングされてしまう。
        setChats(prevChats => [...prevChats, {
          text: selectedAnswer,
          type: "answer",
        }]);
        setTimeout(() => displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const initAnswer = "";
    selectAnswer(initAnswer, currentId);
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [chats]);

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default App;
