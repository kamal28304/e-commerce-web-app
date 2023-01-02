import React,{FC} from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import  { withUser}  from "./withProvider"


type MobileMenuProps={
  user:any;
  setUser:any;
}

const MobileMenu:FC<MobileMenuProps>=({user,setUser}) =>{
 

  function handleLogout() {  localStorage.removeItem("token");
    setUser(undefined);
  }
  if (!user) {
    return <></>;
  }
  return(
   <div className="flex flex-col space-y-3 h-full">
      
      <Link to="/" className="my-2 text-gray-500 flex">Home</Link>
     {/* <Link className="my-2 text-gray-500">About</Link> */}
      {!user && <Link to="/Login" className="my-2
text-gray-500">Login</Link>}
      <Link to="/CartPage"className="my-2 text-gray-500 w-full">Cart</Link>
      <Button onClick={handleLogout}>LogOut</Button>
    
  </div>
  );
}
export default withUser(MobileMenu);
