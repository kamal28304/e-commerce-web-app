import React,{FC, memo} from "react"
import FormikHOC from "./FormikHOC"

type InputProps={
  name?:string;
  label?:string;
  id?:string;
  className:string;
  touched?:boolean;
  error?:string;
  placeholder?:string;
  onChange?:any;
  type?:string;
  productid?:number;
  value?:number | string;
  autoComplete?:string;
  required?:boolean;
  values?:any;
  onBlur?:()=>void
  
}

 const Input:FC<InputProps>=({
  name,
  label,
  id,
  className,
  touched,
  error,
  ...rest
}) =>{
  let borderClass="hover:border-indigo-500"
  
  if(touched && error){
    borderClass = "border-red-500"
  }

  return (
    <div>
      <label
        className="sr-only">
        {label}
      </label>
      <input
        className={"border-2 p-3 rounded-md focus:outline-none " + className + " " + borderClass}
        id={id}
        {...rest}
      />
      {touched && error && <h1 className="text-red-500">{error}</h1>}

    </div>
  );
}

export const FormikInput = FormikHOC(Input)

export default memo(Input);
