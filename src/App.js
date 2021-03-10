import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Display from "./Display";

function App() {
  const [userdetails, setUserdetails] = useState([]);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  console.log("inside App" + edit);
  //debugger;
  return (
    <div className="App">
      <div className="heading">
        <h1 align="center">Hello Solute Lab</h1>
      </div>

      <div className="container">
        <Form
          userdetails={userdetails}
          setUserdetails={setUserdetails}
          id={id}
          key={"vivek"}
          edit={edit}
          setEdit={setEdit}
          setId={setId}
        />

        <Display
          userdetails={userdetails}
          setUserdetails={setUserdetails}
          setId={setId}
          key={"bhai"}
          setEdit={setEdit}
          edit={edit}
        />
      </div>
    </div>
  );
}

export default App;
