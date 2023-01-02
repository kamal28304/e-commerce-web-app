import React, { useState, useEffect, FC } from 'react';
import axios from "axios"
import { UserContext } from "../Contexts"
import Loading from "../Loading"


interface UserProviderProps{
  children:any
}

const  UserProvider:FC<UserProviderProps>=({ children }) =>{
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem("token")
 
  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", { 
        headers: { Authorization: token, } })
        .then((response) => {
          setUser(response.data)
          setLoading(false)
        }).catch(() => {
          localStorage.removeItem("token")
          setLoading(false);
        });
    } else {
      setLoading(false)
    }
  }, [token]);

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider;