import  { useState } from "react";
import { AlertContext } from "../Contexts";

function AlertProvider({ children}: any) {
  const [alert, setAlert] = useState("");

  function removeAlert() {
    setAlert("");
  }

  const alertValue = {
    alert,
    setAlert,
    removeAlert,
    map: (children: any, fn: any) => children,
    forEach: (children: any, fn: any) => {},
    count: (children: any) => 0,
    only: (children: any) => children,
    toArray: (children: any) => [], // adding missing property to fix the error
  };

  return (
    <AlertContext.Provider value={alertValue}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider;
