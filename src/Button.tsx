import  { memo,FC } from "react"
type ButtonProps={
  className?:string;
  children:string;
  onClick?:()=>void;
  type?:"button" | "submit" | "reset";

  
}
const Button:FC<ButtonProps>=({ className, ...props }) =>{
  return (

      <button  {...props}
        className={"px-4 py-2 bg-red-400 rounded-md text-white hover:bg-red-700 " + className}>{props.children}
      </button>
  );
}

export default memo(Button);