import axios from "axios";
// import process from "process";
// console.log(process.env.KK);
const URL_SERVER = "http://localhost:5500/";

export class FetchQuestions {
  getQ = () =>
    axios
      .get(`${URL_SERVER}api/q`)
      .then((res) => res.data)
      .catch((e) => e.message);

  postQ = (body) => {
    axios
      .post(`${URL_SERVER}api/q`, body)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((e) => e.message);
  };

  delQ = (id) => {
    axios
      .delete(`${URL_SERVER}api/q/`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: { id },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => e.message);
    axios.delete(`${URL_SERVER}api/q/`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { id },
    });
  };
}
