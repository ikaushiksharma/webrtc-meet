import React, { useState } from "react";

const SwitchToScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <div className="video_button_container">
      <img
        src={"switchToScreenSharing.svg"}
        onClick={handleScreenShareToggle}
        className="video_button_image"
      />
    </div>
  );
};

export default SwitchToScreenSharingButton;
