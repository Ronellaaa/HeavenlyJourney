import React, { useState, useRef } from "react";
import "../styles/MarianDevotion.css";
import aveMaria from "../assets/audios/aveMaria.mp3";
import joyful from "../assets/audios/Rosary-Joyful-Mysteries.mp3";

export default function MarianDevotion() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="main-div" onClick={handleAudioToggle}>
      <audio ref={audioRef} src={aveMaria}></audio>
      <section className="main-section"></section>
      <section className="rosary-section">
        <div className="rosary-text">
          <h1>Mysteries of the Holy Rosary</h1>
        </div>
        <div className="rosary-mysteries">
          <div className="mysteries joyful">
            <h2 className="mysteryText">Joyful mystery</h2>
          </div>
          <div className="mysteries sorowful">
            <h2 className="mysteryText">Sorrowful mystery</h2>
          </div>
          <div className="mysteries glorius">
            <h2 className="mysteryText">Glorius mystery</h2>
          </div>
          <div className="mysteries luminous">
            <h2 className="mysteryText">Luminous mystery</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
