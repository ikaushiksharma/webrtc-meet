"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import store from "@/lib/redux";
import { connectWithSocketIOServer } from "@/lib/utils/wss";
import { useEffect } from "react";

export const Providers = (props: React.PropsWithChildren) => {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);
  return <Provider store={store}>{props.children}</Provider>;
};
