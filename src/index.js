import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import doc1 from "./images/doc1.jpg";
import doc2 from "./images/doc2.jpg";
const App = () => {
  const containerStyles = () => {
    return {
      width: 1280,
      margin: "auto",
      border: "1px solid black",
      backgroundColor: "#EEE",
      borderRadius: 8,
      padding: 12,
      textAlign: "center",
    };
  };
  const docNames = {
    doc1: "Matheus Sampaio",
    doc2: "Marina Oliveira",
    doc3: "Jasmine Vieira",
  };
  return (
    <div style={containerStyles()}>
      <h2>Profissionais de saúde</h2>
      <div
        style={{
          margin: 8,
          border: "1px solid #DDD",
          borderRadius: 8,
          padding: 8,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div className="profissional">
          <img src={doc1} />
          <p>{docNames.doc1}</p>
        </div>
        <div className="profissional">
          <img src={doc2} />
          <p>{docNames.doc2}</p>
        </div>
        <div className="profissional">
          <img src="https://www.faculdadeide.edu.br/files/news/16336396681984-profissionaldesucesso.jpeg" />
          <p>{docNames.doc3}</p>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
