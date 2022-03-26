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
  var FormData = require("form-data");
  var data = new FormData();
  data.append("age", "70");
  data.append("sex", "1");
  data.append("cp", "4");
  data.append("trestbps", "130");
  data.append("chol", "322");
  data.append("fbs", "0");
  data.append("restecg", "2");
  data.append("thalach", "109");
  data.append("exang", "0");
  data.append("oldpeak", "2.4");
  data.append("slope", "2");
  data.append("ca", "3");
  data.append("thal", "3");

  return await performRequest("POST", "add_tester", data);
};

export const getTestById = async (id) => {
  return await performRequest("GET", `test/${id}`, null);
};

export const getAllTests = async () => {
  return await performRequest("GET", `test`, null);
};

export const test = async () => {
  console.log("test call");
};
