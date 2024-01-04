import React, { useState } from "react";

const MicButton = () => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    setIsMicMuted(!isMicMuted);
  };

  return (
    <div className="video_button_container">
      <img
        src={isMicMuted ? "micOff.svg" : "mic.svg"}
        onClick={handleMicButtonPressed}
        className="video_button_image"
      />
    </div>
  );
};

export default MicButton;
