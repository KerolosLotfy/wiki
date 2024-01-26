import axios from "axios";
// import process from "process";
// console.log(process.env.KK);

export class FetchQuestions {
  getQ = () =>
    axios.get("https://wiki-api-ptyn.onrender.com").then((res) => res.data);

  postQ = (body) => {
    axios
      .post("https://wiki-api-ptyn.onrender.com", body)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e);
  };

  delQ = (id) => {
    axios
      .delete("https://wiki-api-ptyn.onrender.com", id)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e);
  };
}
