import axios from "axios";

const performRequest = async (method, url, data) => {
  const token = "";
  return await axios({
    baseURL: `http://127.0.0.1:5000/api`,
    url: url,
    method: method,
    data: data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
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
  return await performRequest("POST", "add_tester", {
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

export const test = async () => {
  console.log("test call");
};
