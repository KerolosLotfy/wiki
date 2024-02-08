import axios from "axios";
// import process from "process";
// console.log(process.env.KK);
const URL_SERVER = "https://wiki-api-ptyn.onrender.com/";

export class FetchInfo {
  getInfo = {
    nav: () => axios.get(`${URL_SERVER}api/nav`).then((res) => res.data),

    tabs: () =>
      axios
        .get(`${URL_SERVER}api/tabs`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          return res.data;
        })
        .catch((e) => e),

    sub: () => axios.get(`${URL_SERVER}api/sub`).then((res) => res.data),
  };

  postInfo = {
    nav: (body) =>
      axios
        .post(`${URL_SERVER}api/nav`, body)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),

    tabs: (body) =>
      axios
        .post(`${URL_SERVER}api/tabs`, body)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),

    sub: (body) =>
      axios
        .post(`${URL_SERVER}api/sub`, body)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),
  };

  delInfo = {
    nav: (id) =>
      axios
        .delete(`${URL_SERVER}api/nav`, {
          headers: {
            "Content-Type": "application/json",
          },
          data: { id },
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),

    tabs: (id) =>
      axios
        .delete(`${URL_SERVER}api/tabs`, {
          headers: {
            "Content-Type": "application/json",
          },
          data: { id },
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),

    sub: (id) =>
      axios
        .delete(`${URL_SERVER}api/sub`, {
          headers: {
            "Content-Type": "application/json",
          },
          data: { id },
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),
  };

  getOne = {
    nav: (id) =>
      axios
        .get(`${URL_SERVER}api/nav/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { id },
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => e),

    tabs: (navId) =>
      axios
        .get(`${URL_SERVER}api/tabs/${navId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { navId },
        })
        .then((res) => {
          return res.data;
        })
        .catch((e) => e),

    sub: (tabId) =>
      axios
        .get(`${URL_SERVER}api/sub/${tabId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { tabId },
        })
        .then((res) => {
          return res.data;
        })
        .catch((e) => e),
  };
}
