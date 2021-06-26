import React from "react";
import axios from "axios";

// Using Axios instead of fetch because we don't have to use the Json() method on the response
const getApi = (city: string) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98b7465353d383f3d0f3bc4a284a48ae`
  );
};
export default getApi;
