import React, { useState } from "react";
import { Circle, ComponentContainer } from "./MusicStyling";
import audioON from "../images/audioON.png";
import audioOFF from "../images/audioOFF.png";
import MusicClip from "../Music/music1.mp3";
import ReactHowler from "react-howler";

const MusicComponent = () => {
  const [icon, setIcon] = useState(false);
  const [playpause, setPlaypause] = useState(false);

  const handleIconToggle = () => {
    setIcon((prevIcon) => {
      return !prevIcon;
    });
  };

  return (
    <>
      <ComponentContainer>
        <ReactHowler
          src={MusicClip}
          playing={playpause}
          loop={true}
        />
        <Circle onClick={() => setPlaypause(!playpause)}>
          <div className="toggle-wrapper">
            {icon ? (
              <img src={audioON} onClick={() => handleIconToggle()} />
            ) : (
              <img
                src={audioOFF}
                className="on"
                onClick={() => handleIconToggle()}
              />
            )}
          </div>
        </Circle>
      </ComponentContainer>
    </>
  );
};

export default MusicComponent;
