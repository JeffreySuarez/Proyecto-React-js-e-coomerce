import React from "react";
import "./loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <p>Esta pagina esta Cargando.....</p>
      <br />
      <div className="container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};
