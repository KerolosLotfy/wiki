import React, { useEffect, useState } from "react";
// import { FetchData } from "../../../fetch-data/index";
import axios from "axios";



export const Questions = () => {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    (async () => {
      await axios
        .get("https://wiki-api-ptyn.onrender.com/")
        .then((res) => setQuestions(res.data))
        .catch((e) => console.log(`Error ${e.message}`));
    })();
  }, [questions]);

  return (
    <div className="questions">
      <ul>
        {questions &&
          questions.map((obj, i) => {
            return (
              <li key={i} id={obj.Id}>
                <p className="q">
                  <p>Question: {obj.Id}</p>
                  <span>{obj.question} </span>
                </p>

                <p className="a">
                  <p>The Answer:</p>
                  <span>{obj.answer}</span>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};