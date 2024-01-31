import axios from "axios";
// import process from "process";
// console.log(process.env.KK);

export class FetchQuestions {
  getQ = () => axios.get("http://localhost:5500").then((res) => res.data);

  postQ = (body) => {
    axios
      .post("http://localhost:5500", body)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e);
  };

  delQ = (id) => {
    axios
      .delete("http://localhost:5500", id)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e);
  };
}
