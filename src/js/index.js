/* eslint-env browser */
import style from '../sass/layout/main.scss';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App/App";

ReactDOM.render(<App style={style}/>, document.getElementById("app"));
