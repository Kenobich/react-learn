import React, { useContext } from "react";

import { UIContext } from "../../context/UIContext";
export const Success = () => {
  const UI = useContext(UIContext);
  return <div>{UI.success.msg}</div>;
};
