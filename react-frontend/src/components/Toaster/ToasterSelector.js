import React from "react";
import useNotification from "../../common/hooks/useNotification";

import Toaster from "./Toaster";

const ToasterSelector = () => {
  const { notification } = useNotification();
  const { severity, message } = notification;

  if (severity !== "hidden") {
    return <Toaster open={true} severity={severity} text={message} />;
  } else return null;
};

export default ToasterSelector;
