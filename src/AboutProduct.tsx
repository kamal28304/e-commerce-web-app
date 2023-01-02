import React, { useState, useEffect, FC, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import Button from "./Button";
import { getProductData } from "./API";
import Loading from "./Loading";
import NoFoundPage from "./NoFoundPage"
import {withCart} from "./withProvider"


type AboutProductProps={
  handleAddToCart:(id:any,count:number)=>void
}
type ProductState={
 id:string;
  thumbnail:string;
  price:number;
  title:string;
  description:string;
  category:string;
}

const AboutProduct:FC<AboutProductProps>=({ handleAddToCart }) =>{
  const id = +useParams<{id:any}>().id;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductState>([]);

  const [count, setCount] = useState(1);

  useEffect(function() {
    const promise = getProductData(id as any);
    promise.then(function(product) {
      setProduct(product);
      setLoading(false);
      setCount(1);
    }).catch(function() {
      setLoading(false);
    })
  }, [id]);
  function handleCountChange(event:ChangeEvent<HTMLInputElement>) {
    setCount(+event.target.value)
  }
  function handleButtonClick() {
    handleAddToCart(id, count);
    setCount(1)
  }

  if (loading) {
    return <Loading />
  }
  if (!product) {
    return <NoFoundPage />
  }
  return product ? (
    <>
      <div className="flex items-center justify-center h-full">

        <div className="p-5">
      <div className="mb-2">
    <Link className="text-3xl flex items-center mt-5" to="/"><HiArrowCircleLeft />Back</Link>
      </div>
          <div className="sm:flex bg-white p-5 grow">
            <div>
              <img className="object-cover" src={product.thumbnail} />

            </div>
            <div className="flex flex-col basis-0 grow  sm:px-5 ">
              <h2 className="text-sm text-gray-400">{product.category}</h2>
              <h1 className="text-xl font-bold text-gray-700 font-mono mt-2">{product.title}</h1>
              <h2 className="text-md font-bold text-gray-600 mt-4">$ {product.price}</h2>
              <p className="text-gray-400 mt-5 text-lg">{product.description}</p>

              <div className="flex mt-5 ">
                <input
                  type="number"
                  onChange={handleCountChange}
                  value={count}
                  className="border rounded-sm bg-gray-200  px-3 border-inherit w-12 px-2" />
                <Button
                  className="px-5 py-4 bg-red-500 rounded-md  text-white text-center ml-2 font-mono hover:bg-red-700" onClick={handleButtonClick}>ADD TO CART</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2">
            <div>
              {id > 1 && <Link className="text-3xl flex items-center"
                to={"/AboutProduct/" + (id - 1)}><HiArrowCircleLeft />Previous</Link>}
            </div>
            <div>
              {id < 100 && <Link className="text-3xl flex items-center"
                to={"/AboutProduct/" + (id + 1)}><HiArrowCircleRight />Next</Link>}
            </div>

          </div>
        </div>

      </div>
    </>
  ) : <Loading />
}
export default withCart(AboutProduct);
