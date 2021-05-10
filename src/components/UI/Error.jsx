import React, { useContext } from "react";

import { UIContext } from "../../context/UIContext";
export const Error = () => {
  const UI = useContext(UIContext);
  return <div>{UI.error.msg}</div>;
};
