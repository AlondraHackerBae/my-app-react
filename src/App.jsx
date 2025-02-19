import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <body>
        <div class="container">
          <main>
            <header>
              <form class="search-form" id="search-form">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  required
                  class="search-bar"
                  id="search-bar"
                />
                <input type="submit" value="Search" class="search-bar-button" />
              </form>
            </header>
            <div class="weather-app-data">
              <div>
                <h1 class="searched-city" id="city"></h1>
                <p class="weather-details">
                  <span id="time"></span>, <span id="description"></span>
                  <br />
                  Humidity: <strong id="humidity"></strong>, Wind:
                  <strong id="wind-speed">7.2km/h</strong>
                </p>
              </div>
              <div class="temperature-details">
                <div class="icon" id="icon"></div>
                <div class="temperature" id="temperature"></div>
                <div class="unit">°C</div>
              </div>
            </div>
            <div class="weather-forecast" id="forecast">
              <div class="weather-forecast-day">
                <div class="weather-forecast-date">Tue</div>
                <div class="weather-forecast-icon">🌤</div>
                <div class="weather-forecast-temperatures">
                  <div class="weather-forecast-temperature">
                    <strong>15°</strong>
                  </div>
                  <div class="weather-forecast-temperature">10°</div>
                </div>
              </div>
            </div>
          </main>
          <footer>
            This site was coded by
            <a href="https://github.com/AlondraHackerBae" target="_blank">{" "}
              Alondra Turner
            </a>
            , is open-sourced on
            <a
              href="https://github.com/AlondraHackerBae/my-app-react"
              target="_blank"
            >{" "}
              Github
            </a>
            , and hosted on
            <a href="https://notsocloudyforecast.netlify.app/" target="_blank">
              {" "}Netlify
            </a>
          </footer>
        </div>
        <script src="src/index.js"></script>
      </body>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
