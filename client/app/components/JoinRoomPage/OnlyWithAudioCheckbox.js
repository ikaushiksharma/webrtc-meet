import React from "react";

const OnlyWithAudioCheckbox = ({ connectOnlyWithAudio, setConnectOnlyWithAudio }) => {
  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudio(!connectOnlyWithAudio);
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && <img className="checkbox_image" src={"check.png"}></img>}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
