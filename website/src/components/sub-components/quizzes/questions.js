import { useQuery } from "@tanstack/react-query";
import { FetchQuestions } from "../../../apis";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
const { getQ } = new FetchQuestions();

export const Questions = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getData"],
    queryFn: getQ,
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
                  <div className="delete" onClick={() => console.log(obj.Id)}>
                    <FaTrash size={20} />
                  </div>
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



