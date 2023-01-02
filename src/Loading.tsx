import React from "react";
import { ImSpinner10 } from "react-icons/im"

function Loading() {
  return <div className="text-6xl text-gray-700 flex  justify-center items-center p-10 m-auto h-screen font-bold"><ImSpinner10 className="animate-spin" /></div>;
}

export default Loading;