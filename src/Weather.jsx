import React from "react";
import axios from "axios";
//import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${response.data.temperature.current}`
    );
  }
  let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <h2>Hello Waiting on Weather</h2>
  );
}
