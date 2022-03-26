import axios from "axios";

const performRequest = async (method, url, data) => {
  const token = "";
  return await axios({
    baseURL: ``,
    url: url,
    method: method,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const addTester = async () => {
  return await performRequest("POST", "api/add_tester", null);
};

export const initPrediction = async () => {
  return await performRequest("GET", "customers/me", {
    age: 70,
    sex: 1,
    cp: 4,
    trestbps: 130,
    chol: 322,
    fbs: 0,
    restecg: 2,
    thalach: 109,
    exang: 0,
    oldpeak: 2.4,
    slope: 2,
    ca: 3,
    thal: 3,
  });
};
