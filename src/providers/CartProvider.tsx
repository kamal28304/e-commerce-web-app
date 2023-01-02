import React,{FC, useState} from "react"
import { CartContext } from "../Contexts"

type CartProviderProps={
  children:any;
}


const CartProvider:FC<CartProviderProps>=({children})=>{
  console.log("chiuldren",children)
   const savedDataString = localStorage.getItem("my-cart") || "{}";
const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
console.log("cart",cart)
  
  function handleAddToCart(productId:number,count:number) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    console.log("newCart",newCart)
    setCart(newCart);
  }

function updateCart(newCart:any) {
    setCart(newCart)
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce((previous, current) =>{
    return previous + cart[+current]
  }, 0);

const cartString = JSON.stringify(cart);
  localStorage.setItem("my-cart", cartString);

  
  return (
     <CartContext.Provider value={{cart,setCart,totalCount,handleAddToCart,updateCart}}>
       {children}
     </CartContext.Provider>
  )
}

export default CartProvider;