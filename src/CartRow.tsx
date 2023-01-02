import React, { ChangeEvent, FC, useState } from "react"
import { HiXCircle } from "react-icons/hi"
import Button from "./Button"
import Input from "./Input"
import Loading from "./Loading"

type CartRowProps={
   thumbnail:string
  title:string;
  price:number;
  quantity:number;
  productId:number;
  cart:any;
  updateCart:(newCart:any)=>void;
  onQuantityChange:(productId:number,event:any)=>void;
}

const  CartRow:FC<CartRowProps>=({
  thumbnail,
  title,
  price,
  quantity,
  productId,
  cart,
  updateCart,
  onQuantityChange,

})=> {

  const [loading, setLoading] = useState(false)

  function handleChange(event:ChangeEvent<HTMLInputElement>) {
    onQuantityChange(productId, +event.target.value)
  }

  function handleRemove(event:any) {
    const productKey = event.currentTarget.getAttribute("productid");
    const newCart = { ...cart }
    delete newCart[productKey]
    updateCart(newCart);
    setLoading(true);

  }
  if (loading) {
    return <Loading />
  }


  return (
    <>
      <div className="sm:hidden my-5 shadow-lg">
        <div className="border border-gray-300 flex justify-end p-2">
          <span className="flex items-center w-10 h-10 text-4xl text-red-500">
            <HiXCircle productid={productId} onClick={handleRemove} />
          </span>

        </div>
        <div className="border border-gray-300 p-2 flex justify-center">
          <img className="h-16 w-16" src={thumbnail} />
        </div>
        <div className="border border-gray-300 flex justify-between p-2 ">
          <h1 className="font-bold">Product:</h1>
          <h1 className="text-red-400">{title}</h1>
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1 className="font-bold">Price:</h1>
          <h1>${price}</h1>
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1 className="font-bold">Quantity:</h1>
          <Input className="w-12 h-5 border border-gray-300"
            productid={productId}
            value={quantity}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1 className="font-bold">Subtotal:</h1>
          <h1> ${price * quantity}</h1>
        </div>
      </div>


      {/* Responsive desktop view cart Row*/}
      <div className="hidden sm:block">
        <div className="flex items-center px-4 py-2 space-x-4 border border-gray-300 ">
          <span className="flex items-center w-10 h-10 text-4xl text-red-500">
            <HiXCircle productid={productId} onClick={handleRemove} />
          </span>
          <div className="w-10 h-10">
            <img className="object-cover w-full h-full" src={thumbnail} />
          </div>
          <h3 className="grow">{title}</h3>
          <span className="w-20">${price}</span>
          <div className="w-32">
            <Input
              type="number"
              className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
              productid={productId}
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <span className="w-20">${price * quantity}</span>
        </div>
      </div>
    </>
  );
}

export default CartRow;