import React from "react";
import myCat from "./mycat.jpg";

function CurlyAttribute() {
  return (
    <div>
      <h2>Curly Braces for Attributes</h2>
      <img
        src={myCat}
        alt="My cat"
        style={{ width: "150px", borderRadius: "10px" }}
      />
    </div>
  );
}

function CurlyInsideTag() {
  const today = new Date().toLocaleDateString();
  return (
    <div>
      <h2>Curly Braces Inside HTML Tag</h2>
      <p>Today’s date is {today}.</p>
    </div>
  );
}

function CurlyInlineCSS() {
  const boxStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    maxWidth: "300px",
    margin: "20px auto",
  };

  return (
    <div>
      <h2>Curly Braces for In-line CSS</h2>
      <div style={boxStyle}>
        ✨ This box is styled with inline curly braces ✨
      </div>
    </div>
  );
}

function CurlyObject() {
  const cat = { name: "EP", age: 1, favoriteToy: "feather wand" };

  return (
    <div>
      <h2>Curly Braces for Object</h2>
      <p>
        {cat.name} is {cat.age} years old and loves the {cat.favoriteToy}.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>React Curly Brace Examples</h1>
      <CurlyAttribute />
      <CurlyInsideTag />
      <CurlyInlineCSS />
      <CurlyObject />
    </div>
  );
}
