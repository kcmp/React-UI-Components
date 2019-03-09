import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from "moment";

// const moment = require("moment");

ReactDOM.render(<App />, document.getElementById('root'));

document.querySelector(".card-container").addEventListener("click", function() {
    window.open("https://www.reactjs.org");
  });
  
  document.querySelector(".header-time").textContent = moment().format("D MMM");
