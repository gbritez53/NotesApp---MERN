import React from "react";

import "./home.css";

export default function index() {
  return (
    <div className="container">
      <div className="card">
        <h1>Notes App with NodeJS and MongoDB</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr className="hr" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          harum repudiandae, voluptates officia aliquid consectetur quas
          necessitatibus quibusdam impedit. Sint quia corporis, ad minima animi
          accusamus voluptate deserunt impedit quidem ut. Neque reiciendis eum
          est fugiat aspernatur deleniti quae ipsam!
        </p>
        <button className="btn">
          Leer Más
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}
