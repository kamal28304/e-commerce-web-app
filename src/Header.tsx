import React, { FC, useState } from "react";
import { HiShoppingBag } from "react-icons/hi"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileMenu from "./MobileMenu"
import {withUser,withCart} from "./withProvider"


 type HeaderProps={
   totalCount:any;
   user:any
 }
const Header:FC<HeaderProps>=({ totalCount ,user})=> {
 const [isMenuOpen, setMenuOpen] = useState(false);

  function clickMenuOpen() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <div className="p-2  flex mx-auto justify-between fixed w-full bg-yellow-100">
        <div className="flex">
          <div className="flex flex-col">
            {user && <GiHamburgerMenu onClick={clickMenuOpen} className="text-red-300 text-3xl" />}
            <div className="mt-6">
              {isMenuOpen && <MobileMenu />}
            </div>
          </div>

          {!isMenuOpen && <img className="w-32 h-12 object-cover ml-2" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />}
        </div>
        {user && <div className="flex flex-col items-center">
          { !isMenuOpen &&<Link to="/CartPage"
            className="flex items-center justify-center text-5xl text-gray-500 hover:bg-gray-700"> <HiShoppingBag /></Link>}
          <span className="-m-7 text-white">{+totalCount}</span>


        </div>}
      </div>

    </div>
  )
}
export default withCart(withUser(Header));
