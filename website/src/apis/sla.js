import axios from "axios";
// import process from "process";
// console.log(process.env.KK);
const URL_SERVER = "http://localhost:5500/";

export class FetchSLA {
  getQ = () =>
    axios
      .get(`${URL_SERVER}api/sla`)
      .then((res) => res.data)
      .catch((e) => e.message);

  postQ = (body) => {
    axios
      .post(`${URL_SERVER}api/sla`, body)
      .then((res) => {
        return res.data;
      })
      .catch((e) => e.message);
  };

  delQ = (id) => {
    axios
      .delete(`${URL_SERVER}api/sla/`, {
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
    axios.delete(`${URL_SERVER}api/sla/`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { id },
    });
  };
}
