import { useMutation, useQuery } from "@tanstack/react-query";
import { FetchQuestions } from "../../../apis";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
const { getQ } = new FetchQuestions();

export const Questions = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getQ"],
    queryFn: getQ,
  });

  const mutation = useMutation({
    // 'mutationFn': deleteQ,
    mutationKey: ["deleteQ"],
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
            .sort((a, b) => b.Id - a.Id)
            .map((obj, i) => {
              return (
                <li key={i} id={obj.Id}>
                  {localStorage.getItem("access") === "admin" && (
                    <div
                      className="delete"
                      onClick={() => mutation.mutate(obj.Id)}
                    >
                      <FaTrash size={20} />
                    </div>
                  )}
                  <div className="q">
                    <p>Question: {obj.Id}</p>
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
