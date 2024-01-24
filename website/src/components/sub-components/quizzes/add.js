import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";

export const Add = () => {
  const [form, setForm] = useState(false);

  const addQ = () => {
    setForm(!form);
  };

  const newQ = async (e) => {
    e.preventDefault();
    let q = document.querySelector("#question").value;
    let a = document.querySelector("#answer").value;
    setForm(false);
    if (!q & !a) return;
    await axios
      .post("https://wiki-api-ptyn.onrender.com/", {
        question: q,
        answer: a,
      })
      .then((res) => res.data)
      .catch((e) => console.log(`Error: ${e.message}`));
  };

  return (
    <>
      <FaPlusCircle
        size={30}
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          display: "block",
          cursor: "pointer",
        }}
        onClick={addQ}
      />

      {form && (
        <form className="newForm">
          <input
            type="text"
            name="question"
            placeholder="Write your Question"
            id="question"
          />
          <input
            type="text"
            name="answer"
            placeholder="Write The answer"
            id="answer"
          />
          <button type="submit" onClick={newQ}>
            Add
          </button>
        </form>
      )}
    </>
  );
};
