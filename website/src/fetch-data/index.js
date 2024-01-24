import axios from "axios";

export class FetchData {
  getData = async (url) => {
    await axios
      .get(url)
      .then((res) => res.data)
      .catch((e) => console.log(`Error ${e.message}`));
  };

  postData = async (url, body) => {
    await axios
      .post(url, body)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  };
}
