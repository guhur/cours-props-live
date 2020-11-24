import React from "react";
import "./styles.css";
import NavBar from "./MyComponents";

export default function App() {
  const isAdmin = true;
  return (
    <div className="App">
      <NavBar admin={isAdmin} />
    </div>
  );
}
