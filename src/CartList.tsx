import React, { useState, useEffect, FC } from "react"
import CartRow from "./CartRow"
import CartFooter from "./CartFooter"
import Loading from "./Loading"
// import NoMatching from "./NoMatching"

type CartListProps={
  products:any;
  cart:any;
  updateCart:(cart:any)=>void
}

const CartList:FC<CartListProps>=({ products, cart, updateCart }) =>{
  const
    [localCart, setLocalCart] = useState(cart)
  const [loading,setLoading]=useState(false)

  useEffect(function() {
    setLocalCart(cart)
  }, [cart])

  function handleChange(productId:number, newValue:string) {
    const newLocalCart = { ...localCart, [productId]: newValue }
    setLocalCart(newLocalCart)
  }
  
  function updateMyCart(){
    setLoading(true)
    updateCart(localCart)
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }
  return (
  <div>
      <div className="hidden sm:block">
        <div className="flex px-4 py-2 space-x-4 bg-gray-100 border border-gray-300">
          <span className="ml-28 grow font-bold text-xl">Product</span>
          <span className="w-20 font-bold text-xl">Price</span>
          <span className="w-32 font-bold text-xl">Quantity</span>
          <span className="w-20 font-bold text-xl">Subtotal</span>
        </div>
      </div>

      <div>
        {products.map(function(items:any) {
          return <CartRow
            {...items}
            key={items.id}
            quantity={localCart[items.id]}
            cart={cart}
            productId={items.id}
            updateCart={updateCart}
            onQuantityChange={handleChange}
          />
        })}
        <CartFooter updateCart={updateMyCart} />
      </div>
    </div>
  );
}

export default CartList;
