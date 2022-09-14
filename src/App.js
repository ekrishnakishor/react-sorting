import React, { useState } from "react";
import "./App.css";

function App() {
  const [abc, setAbc] = useState("");
  const [questionSet, setQuestionSet] = useState([
    {
      question: "Who was the drummer of the Beatles?",
      correct_answer: "Ringo Starr",
      created_date: "09/01/2022 4:00PM EST",
      modified_date: "09/01/2022 4:00PM EST",
    },
    {
      question: "Which country was Harold Bluetooth king of",
      correct_answer: "Denmark",
      created_date: "06/24/2022 6:31PM EST",
      modified_date: "09/01/2022 3:50PM EST",
    },
    {
      question: "What show features Ash Ketchum and Pikachu?",
      correct_answer: "Pokemon",
      created_date: "04/24/2022 1:31PM EST",
      modified_date: "09/01/2022 3:30PM EST",
    },
  ]);
  let questionSet2 = questionSet;

  const handleChange = () => {
    var x = document.getElementById("mySelect").value;
    console.log(x);
    setAbc(x);
    if (x === "answersDes") {
      questionSet.sort((a, b) =>
        a.correct_answer > b.correct_answer
          ? 1
          : b.correct_answer > a.correct_answer
          ? -1
          : 0
      );
    } else if (x === "answersAsc") {
      questionSet.sort((a, b) =>
        b.correct_answer > a.correct_answer
          ? 1
          : a.correct_answer > b.correct_answer
          ? -1
          : 0
      );
    } else if (x === "questionAsc") {
      questionSet.sort((a, b) =>
        a.created_date > b.created_date
          ? 1
          : b.created_date > a.created_date
          ? -1
          : 0
      );
    } else if (x === "questionDes") {
      questionSet.sort((a, b) =>
        b.created_date > a.created_date
          ? 1
          : a.created_date > b.created_date
          ? -1
          : 0
      );
    } else {
      console.log("done");
    }
  };

  return (
    <div className="App">
      <div className="top">
        <h2>Questions</h2>
        <select onChange={handleChange} id="mySelect">
          <option value="initial">Select Sorting Method</option>
          <option value="answersDes">Answers(A-Z)</option>
          <option value="answersAsc">Answers(Z-A)</option>
          <option value="questionAsc">created_date(Asc)</option>
          <option value="questionDes">created_date(Des)</option>
        </select>
      </div>
      <div className="mapp">
        {questionSet2.map((q) => (
          <div
            key={q.id}
            style={{ padding: "40px 50px", border: "1px solid black" }}
          >
            <div className="sett">
              <div>
                <span className="bold">Question: </span>
                {`${q.question}`}
              </div>
              <br />
              <div>
                <span className="bold">Answers: </span>
                {`${q.correct_answer}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
