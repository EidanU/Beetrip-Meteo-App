import React from "react";
import axios from 'axios';

const getApi = (city: string) => {
return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98b7465353d383f3d0f3bc4a284a48ae`);
};
export default getApi;