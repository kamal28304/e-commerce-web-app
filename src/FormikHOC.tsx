
import React, { FC } from "react";
import { useField } from "formik";

type OutgoingComponentProps={
  name:string;
  id:number;
  className:string;
  label:string
}

function FormikHOC(Input:any) {
  const OutgoingComponent:FC<OutgoingComponentProps>=(
    {
      name,
     id,
    label,
     className,
      ...rest
    })=> {
    const field = useField(name);
    const [data, meta] = field;
    const { value, onBlur, onChange } = data;
    const { touched, error } = meta;

    let borderClass = "border-gray-200 focus:border-indigo-500 "
    
    if (error && touched) {
      borderClass = "border-red-500 "
    }
    return (
      <div>
        <label htmlFor={id}
          className="sr-only">
          {label}
        </label>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          touched={touched}
          className={"border-2 p-3 rounded-md focus:outline-none " + borderClass + className}
          {...rest}
        />
        {touched && error && <h1 className="text-red-700">{error}*</h1>}
      </div>
    );

  }
  return OutgoingComponent;
}

export default FormikHOC;