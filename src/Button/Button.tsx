import React, { memo,FC } from "react"
type ButtonProps={
  className?:string;
  children:string;
  onClick?:()=>void;
  type?:string;
  
}
const Button:FC<ButtonProps>=({ className, ...props }) =>{
  return (

    <div>
      <button {...props}
        className={"px-4 py-2 bg-red-400 rounded-md text-white hover:bg-red-700 " + className}>{props.children}
      </button>
    </div>
  );
}

export default memo(Button);