import React, { Component, memo } from 'react';
import { Link } from "react-router-dom";


type ProductProps = {
  thumbnail: string;
  category: string;
  title: string
  price: number;
  id: number;
}
class Product extends Component<ProductProps> {

  constructor(props: ProductProps) {
    super(props)
  }
  render(): React.ReactNode {
    const { thumbnail, category, title, price, id } = this.props;


    return (

      <div className="max-w-xs flex flex-col justify-between" >
        <div>
          <Link to={"/AboutProduct/" + (id)}>
            <div className="w-full aspect-square">
              <img className="h-full w-full object-cover" src={thumbnail} />
            </div>
          </Link>
          <div>
            <h2 className="text-gray-500 text-sm">{category}</h2>
            <p className="font-bold text-gray-400 text-xl my-2">{title}</p>
            <span className="fa fa-star text-orange-500"></span>
            <span className="fa fa-star text-orange-500"></span>
            <span className="fa fa-star text-orange-500"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <h1 className="font-bold text-cyan-500 text-xl my-2 font-mono">Rs :{price}</h1>
          </div>
        </div>
        <div className="flex justify-center mb-2 mr-2">


          {/*className="bg-indigo-500 hover:bg-indigo-700 px-2 py-1 rounded-md my-2 text-white font-mono">View details <span className="font-black text-2xl">&#x2192;</span>
        uk#n*/}
        </div>

      </div>
    );
  }
}

export default memo(Product);