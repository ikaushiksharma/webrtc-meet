"use client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ChatSection from "@/app/components/RoomPage/ChatSection/ChatSection";
import ParticipantsSection from "@/app/components/RoomPage/ParticipantsSection/ParticipantsSection";
import VideoSection from "@/app/components/RoomPage/VideoSection/VideoSection";
import RoomLabel from "@/app/components/RoomPage/RoomLabel";
import * as webRTCHandler from "@/lib/utils/webRTCHandler";
import Overlay from "@/app/components/RoomPage/Overlay";

const RoomPage = ({ roomId, identity, isRoomHost, showOverlay }: any) => {
  useEffect(() => {
    webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost, identity, roomId);
  }, []);

  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStoreStateToProps = (state: any) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);
