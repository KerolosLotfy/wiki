import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { FetchSLA } from "../../../apis/sla";
import { Loading } from "../../../loading";
const { getQ, delQ } = new FetchSLA();

export const SlaData = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getSLA"],
    queryFn: getQ,
  });

  const mutation = useMutation({
    mutationFn: delQ,
    mutationKey: ["deleteSLA"],
  });

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  if (isLoading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="sla">
      <ul>
        {data ? (
          data.map((obj, i, arr) => {
            return (
              <li key={i} id={obj.Id}>
                {localStorage.getItem("access") === "admin" && (
                  <div
                    className="delete"
                    onClick={() => mutation.mutate(obj.Id)}
                  >
                    <FaTrash
                      size={20}
                      className="delete"
                      onClick={async (e) => {
                        let check = window.confirm(
                          "Are you sure to delete this SLA"
                        );
                        if (check) {
                          mutation.mutate(obj.id);
                        }
                      }}
                    />
                  </div>
                )}
                <div className="q">
                  <p>Case: {arr.length - i}</p>
                  <span>{obj.cases} </span>
                </div>

                <div className="a">
                  <p>Normal SLA:{obj.normal}</p>

                  <p>delay SLA: {obj.delay}</p>
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
