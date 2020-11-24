import React from "react";
import "./styles.css";
import NavBar from "./MyComponents";

export default function App() {
  const children = (
    <li>
      <b>Pricing</b>
    </li>
  );
  const pages = ["Accueil", "Contact"];
  return (
    <div className="App">
      <h5>Balise auto-fermante</h5>
      <NavBar />
      <h5>Children entre les 2 balises</h5>
      <NavBar pages={pages}>
        <li>
          <b>Pricing</b>
        </li>
        <li>Our solution</li>
      </NavBar>
      <h5>Children en tant qu'attribut</h5>
      <NavBar children={children} />
    </div>
  );
}
