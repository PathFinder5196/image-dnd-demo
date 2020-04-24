import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageContainer from "./components/index";
import "./styles/style.css";
function App() {
  return (
    <div>
      <section className="header">
        <h3>
          Image Drag N Drop Demo
        </h3>
      </section>
      <ImageContainer />
    </div>
  );
}

export default App;
