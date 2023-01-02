import React from "react"

function CartTotal() {
  return(
    <div className="flex items-end justify-end flex-col mt-5">

          <div className="border bg-gray-200 border-gray-400  px-20 py-2">
            <h1>Cart Totals</h1>
          </div>
          <div className="border-2 bg-white border-gray-400 w-60 p-2">


            <div className="flex justify-between border-b-2 border-gray-500 p-2">

              <h1>Subtotal </h1>
              <h1>$ 636 </h1>
            </div>
            <div className="flex justify-between border-b-2 border-gray-500 p-2">
              <h1>Total </h1>
              <h1>$ 636 </h1>
            </div>
            <button className="px-4 py-2 bg-red-500 text-center my-3"> Procede to check out</button>


          </div>
        </div>
  );
  
}

export default CartTotal;