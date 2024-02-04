import axios from "axios";
// import process from "process";
// console.log(process.env.KK);
export class FetchQuestions {
  getQ = () => axios.get("http://localhost:5500/api/q").then((res) => res.data);

  postQ = (body) => {
    axios
      .post("http://localhost:5500/api/q", body)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e);
  };

  delQ = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:5500/api/q", id)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e);
  };
}

