"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { connect } from "react-redux";
import { setIsRoomHost } from "@/lib/redux/actions";
import JoinRoomTitle from "@/app/components/JoinRoomPage/JoinRoomTitle";
import JoinRoomContent from "@/app/components/JoinRoomPage/JoinRoomContent";

const JoinRoomPage = (props: any) => {
  const { setIsRoomHostAction, isRoomHost } = props;

  const search = useSearchParams();

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      setIsRoomHostAction(true);
    }
  }, []);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent />
      </div>
    </div>
  );
};

const mapStoreStateToProps = (state: any) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch: any) => {
  return {
    setIsRoomHostAction: (isRoomHost: any) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
