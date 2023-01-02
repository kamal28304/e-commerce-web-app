import React, { useState, useEffect, FC } from "react"
import CartList from "./CartList"
import Loading from "./Loading"
import { getProductByIds } from "./API";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal"
import { withCart } from "./withProvider"

type CartPageProps = {
 cart: {};
  updateCart: () => void
}


const CartPage: FC<CartPageProps> = ({ cart, updateCart }) => {
  console.log("cart",cart)
  const [cartList, setCartList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    const ProductIds = Object.keys(cart);
    getProductByIds(ProductIds).then((responses) => {
      setCartList(responses)
      setLoading(false);
    })
  }, [cart]);


  if (loading) {
    return <Loading />
  }
  return (

    <div className="bg-white sm:px-16 sm:py-20 max-w-6xl  p-3 mt-20">
      <CartList products={cartList} cart={cart} updateCart={updateCart} />

      <div className="mt-10 self-end">
        <CartTotal />
      </div>

      <Link to="/" className="px-3 py-1 bg-gray-500 mt-5 self-center">
        Back
      </Link>
    </div>
  );
}


export default withCart(CartPage);