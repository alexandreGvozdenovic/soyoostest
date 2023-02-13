import React, { useState } from "react";
import "./FilterDropDown.css";
export default function FilterDropDown() {
  const [isOpen, setIsopen] = useState(false);
  const [filter, setFilter] = useState("Points Croissants");
  return (
    <div className="filterbox">
      <p onClick={() => setIsopen(!isOpen)}>
        Trier par : <span className="currentfilter">{filter}</span>
      </p>
      <img
        className="angleicon"
        src="/icons/angledown.svg"
        onClick={() => setIsopen(!isOpen)}
      />
      <div
        className={`overlay ${isOpen && "show"}`}
        onClick={() => setIsopen(false)}
      />
      <div className={`filterlist ${isOpen && "show"}`}>
        <div
          className="hoverbox"
          onClick={() => {
            setFilter("Points Croissants");
            setIsopen(false);
          }}
        >
          <p className="filteritem">Points Croissants</p>
        </div>
        <div
          className="hoverbox"
          onClick={() => {
            setFilter("Points Décroissants");
            setIsopen(false);
          }}
        >
          <p className="filteritem">Points Décroissants</p>
        </div>
        <div
          className="hoverbox"
          onClick={() => {
            setFilter("Avis Croissants");
            setIsopen(false);
          }}
        >
          <p className="filteritem">Avis Croissants</p>
        </div>
        <div
          className="hoverbox"
          onClick={() => {
            setFilter("Avis Décroissants");
            setIsopen(false);
          }}
        >
          <p className="filteritem">Avis Décroissants</p>
        </div>
      </div>
    </div>
  );
}
