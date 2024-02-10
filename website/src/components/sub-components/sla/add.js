import { FaPlusCircle } from "react-icons/fa";
import { FetchSLA } from "../../../apis/sla";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const { postQ } = new FetchSLA();
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
    let c = document.querySelector("#case").value;
    let n = document.querySelector("#normalSLA").value;
    let d = document.querySelector("#delaySLA").value;
    setForm(false);
    return { cases: c, normal: n, delay: d   };
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
          <h3>Add New SLA</h3>
          <input type="text" name="case" placeholder="Insert case" id="case" />
          <div style={{ display: "flex" }}>
            <input
              type="text"
              name="normal"
              placeholder="Insert normal SLA"
              id="normalSLA"
            />
            <input
              type="text"
              name="delay"
              placeholder="Insert delay SLA"
              id="delaySLA"
            />
          </div>
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
