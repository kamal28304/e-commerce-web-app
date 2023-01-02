import React, { FC } from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { Link } from "react-router-dom"
import Input from "./Input"
import axios from "axios"
import {withUser,withAlert} from "./withProvider";
import Alert from "./Alert"


export type LoginProps={
  handleSubmit:()=>void;
  values:{
    email:string;
    password:string
  fullName?:string
  };
  touched:{
    email:boolean,
    password:boolean
    fullName?:boolean;
    
  };
  errors:{
    email:string;
    password:string
    fullName?:string;
  },
  handleBlur:()=>void
  handleChange:()=>void
  alert:boolean;
}

function callLoginApi(values:any, bag:any) 
{ 
  console.log("bag",bag)
axios.post("https://myeasykart.codeyogi.io/login", {
    email: values.email,
    password: values.password,
  }).then((response) => {
    const { user, token } = response.data;
    localStorage.setItem("token", token)
    bag.props.setUser(user);
    console.log("user in login ",user)
  }).catch(()=>{
bag.props.setAlert({
  type:"error",              
  message:"Invalid credentials",
  })
  })
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

const initialValues:any = {
  email: "",
  password: "",
}

export const Login:FC<LoginProps>=({
  handleSubmit,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  alert,
}) =>{
  console.log("touched",touched)
   console.log("errors",errors)
     console.log("alert",alert)

  return (
    
       
    <div className="p-3 flex flex-col justify-center items-center ">
     <div className="my-10 w-full">
       { alert && <Alert /> }
     </div>
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-4 shadow-md w-96 rounded-sm">

        <h1 className="text-2xl font-bold my-3 text-gray-700">Login</h1>
        <div className="border border-gray-300 rounded-md p-5 flex flex-col">

          <Input
            values={values.email}
            touched={touched.email}
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="email address"
            placeholder="email address"
            name="email"
            id="email"
            type="email"
        autoComplete="email"
            required
            className=" w-full rounded-b-none"
          />

          <Input
            values={values.password}
            touched={touched.password}
            error={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="password"
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-t-none"
          />

          <div className="flex my-3">
            <input
              type="checkbox"
              className="border self-start" />
            <h1 className="-mt-1 ml-1">Remember me</h1>
          </div>
          <div className="flex justify-between">
            <Button type="submit">LOG IN</Button>
          </div>

        </div>

      </form>

      <Link to="/SignUp"
        className="text-blue-500">don't have an account? SIGNUP</Link>

      <Link to="/ForgotPassword"
        className="text-blue-500">Forgot Password?</Link>
    </div>
  );
}

 const FormikLogin= withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Login);

export default withAlert(withUser(FormikLogin));

