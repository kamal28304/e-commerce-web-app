import React, { FC } from "react"
import {Navigate} from "react-router"
import { withUser } from "./withProvider"

 type AuthRouteProps={
   user:any;
   children:any;
 }
const AuthRoute:FC<AuthRouteProps>=({user,children})=> {
 
  if (user) {
    return <Navigate to="/"/>
  }
  return children;
}

export default withUser(AuthRoute);