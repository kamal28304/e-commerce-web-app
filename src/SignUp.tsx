import React, { FC } from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { Link } from "react-router-dom"
import Input from "./Input"
import axios from "axios"
import {withUser,withAlert} from "./withProvider"
import Alert from "./Alert"
import { LoginProps } from "./Login";


 type SignUpProps=LoginProps
//   handleSubmit:()=>void;
//   values:{
//     email:string;
//     password:string;
//     fullName:string
//   };
//   touched:any;
//   errors:any,
//   handleBlur:()=>void
//   handleChange:()=>void
//   alert:any;
// }




function callSignUpApi(values:any, bag:any) {
  axios.post("https://myeasykart.codeyogi.io/signup", {
    fullName: values.fullName,
    email: values.email,
    password: values.password,
  }).then((response) => {
    const { user, token } = response.data;
localStorage.setItem("token", token)
    bag.props.setUser(user);
    console.log("signed in user ", user,token)
  }).catch(()=>{
    bag.props.setAlert({
      type:"error",
      message:"email entered by you Already in use.please enter your unique email",
    })
})
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})

const initialValues  = {
  email: "",
  password: "",
  fullName: "",
  confirmPassword: "",
} 

export const SignUp:FC<SignUpProps>=({
  handleSubmit,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  alert,
   }) =>{
  
  return (
    <div className="bg-gray-300 p-2 flex flex-col justify-center items-center ">
      <div className="my-10 w-full">
      {alert && <Alert />}
</div>
      <form onSubmit={handleSubmit}
        className="bg-white p-4 shadow-md w-96">

        <h1 className="text-xl font-bold my-3 text-gray-700">Create Account</h1>
        <div className="border border-gray-300 rounded-md p-5 flex flex-col">


          <Input
            values={values.fullName}
            touched={touched.fullName}
            error={errors.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="full Name"
            placeholder="full Name"
            name="fullName"
            id="fullName"
            type="text"
            required
            className="w-full rounded-b-none "
          />

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
            className=" w-full rounded-b-none rounded-t-none"
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
            <Button type="submit">SIGNUP</Button>
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

const EasySignUp  = withFormik({
  validationSchema: schema,
  initialValues : initialValues ,
  handleSubmit: callSignUpApi,
})(SignUp)
export default withAlert(withUser(EasySignUp));