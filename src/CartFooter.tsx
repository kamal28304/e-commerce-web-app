import React,{FC} from "react";
import Button from "./Button"
import Input from "./Input";

type CartFooterProps={
  updateCart:()=>void;
}

 const CartFooter:FC<CartFooterProps>=({updateCart})=> {

return (
    <div className="sm:flex justify-between border border-gray-500 p-3 rounded-b-md">
      <div className="flex space-x-4">
        <Input placeholder="Coupen Code"
          className="border w-32 sm:w-full " />
        <Button className="px-3 py-3 bg-red-500 text-white text-center ">APPLY COUPON</Button>
      </div>

      <Button className=" py-4 bg-red-500 text-white text-center my-2 sm:my-0 w-full" onClick={updateCart}>Update Cart</Button>
    </div>
  );
}

export default CartFooter;