import { useMutation, useQuery } from "@tanstack/react-query";
import { FetchQuestions } from "../../../apis/questions";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
const { getQ, delQ } = new FetchQuestions();

export const Questions = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getQ"],
    queryFn: getQ,
  });

  const mutation = useMutation({
    mutationFn: delQ,
    mutationKey: ["delQ"],
  });

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  if (isLoading) return <div>Loading ....</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="questions">
      <ul>
        {data ? (
          data
            .sort((a, b) => b.id - a.id)
            .map((obj, i) => {
              return (
                <li key={i} id={obj.Id}>
                  {localStorage.getItem("access") === "admin" && (
                    <FaTrash
                      size={20}
                      className="delete"
                      onClick={async (e) => {
                        let check = window.confirm(
                          "Are you sure to delete this question"
                        );
                        if (check) {
                          mutation.mutate(obj.id);
                        }
                      }}
                    />
                  )}
                  <div className="q">
                    <p>Question: {obj.id}</p>
                    <span>{obj.question} </span>
                  </div>

                  <div className="a">
                    <p>The Answer:</p>
                    <span>{obj.answer}</span>
                  </div>
                </li>
              );
            })
        ) : (
          <h2 style={{ color: "#FFF" }}>NO Questions</h2>
        )}
      </ul>
    </div>
  );
};
