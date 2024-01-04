"use client";
import React, { useEffect } from "react";
import ConnectingButtons from "@/app/components/IntroductionPage/ConnectingButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "@/lib/redux/actions";

const IntroductionPage = ({ setIsRoomHostAction }: any) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);
  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img alt="logo" src="logo.png" className="introduction_page_image" />
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch: any) => {
  return {
    setIsRoomHostAction: (isRoomHost: any) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
