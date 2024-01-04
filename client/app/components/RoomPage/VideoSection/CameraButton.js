import React, { useState } from "react";


const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <div className="video_button_container">
      <img
        src={isLocalVideoDisabled ? "cameraOff.svg" : "camera.svg"}
        className="video_button_image"
        onClick={handleCameraButtonPressed}
      />
    </div>
  );
};

export default CameraButton;
