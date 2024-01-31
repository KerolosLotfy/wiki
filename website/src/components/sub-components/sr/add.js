import { FaPlusCircle } from "react-icons/fa";
import { FetchQuestions } from "../../../apis";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const { postQ } = new FetchQuestions();
export const Add = () => {
  const [form, setForm] = useState(false);

  const addQ = () => {
    setForm(!form);
  };

  const mutation = useMutation({
    mutationFn: postQ,
  });

  if (mutation.isError) return <div>Error: {mutation.error.message}</div>;
  if (mutation.isLoading) return <div>'Adding Question...'</div>;

  if (mutation.isPending) return <div>Question Added</div>;

  const newQ = async (e) => {
    e.preventDefault();
    let q = document.querySelector("#question").value;
    let a = document.querySelector("#answer").value;
    setForm(false);
    return { question: q, answer: a };
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
          <h3>Add New SR</h3>
          <input
            type="text"
            name="level3"
            placeholder="Insert Level 3"
            id="srTitle"
          />
          <input
            type="text"
            name="sr"
            placeholder="Insert SR"
            id="sr"
          />
          <button
            type="submit"
            onClick={async (e) => mutation.mutate(await newQ(e))}
          >
            Add
          </button>
        </form>
      )}
    </>
  );
};
