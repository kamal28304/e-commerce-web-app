import React,{useState} from "react"
import { AlertContext } from "../Contexts"


function AlertProvider({children}:any){
   const [alert, setAlert] = useState("");

   function removeAlert() {
    setAlert("");
  }
  return (
     <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
       {children}
     </AlertContext.Provider>
  )
}

export default AlertProvider;