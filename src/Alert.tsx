import  { FC, useEffect } from "react";
import { IconType } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md"
import { withAlert } from "./withProvider"


  type ThemeMapData={
    success:{
      color:string;
      Icon:IconType
    },
    error:{
       color:string;
      Icon:IconType
    }
  }
      type AlertProps={
        alert:any;
        removeAlert:()=>void;
      }


const themeMap:ThemeMapData = {
    success: {
      color:"bg-green-500",
  Icon:AiOutlineCheckCircle,
             },
    error: { 
      color:"bg-red-500",
      Icon:MdOutlineDangerous,
           },
  }


const Alert:FC<AlertProps> =({ alert, removeAlert }):any => {
 
 const {type,message} = alert;
  const {color,Icon} = themeMap[type as keyof ThemeMapData]
  
  useEffect(() => {
    if(alert){
    const timeout=setTimeout(removeAlert,3*1000)
    return function(){
      clearTimeout(timeout)
    }
    }
  }, [alert]);

  if(!alert){
   return;
 }

  return (
    <div>
     <div className="flex items-center justify-center px-4">
        <div
          role="alert" id="alert" className="transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between">
          <div className="flex flex-col items-center md:flex-row">
            <div className={"mr-3 p-4 rounded md:rounded-tr-none md:rounded-br-none text-white " + color}>
              <Icon />
            </div>
            <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0 ">{type}</p>

            <p className="text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">
              {message}
            </p>
          </div>
          <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
            <button className="focus:outline-none focus:text-gray-400 hover:text-gray-400 text-sm cursor-pointer text-gray-600 dark:text-gray-400"
              onClick={removeAlert}>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAlert(Alert);