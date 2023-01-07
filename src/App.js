import "./App.css";
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import cartB from "./ico/cartB.png";
import cartW from "./ico/cartW.png";
import accountB from "./ico/accountB.png";
import accountW from "./ico/accountW.png";
import theme from "./ico/theme.png";
import menuW from "./ico/menuW.png";
import arkay from "./ico/Arkay.jpg";
import color from "./img/color.jpg";

function App(props) {
  return (
    <div className="App">
      <nav class="container-fluid">
        <img src={theme} class="ico" />
        <img src={accountW} class="ico" />
        <img src={cartW} class="ico" />
        <img src={arkay} class="logo" />
        <img src={menuW} class="menu" />
      </nav>
      <div class="landing">
        <img src={color} class="color" />
        <input class='search'/>
        <input class='searchBtn' type='submit'/>
      </div>
    </div>
  );
}

export default App;
