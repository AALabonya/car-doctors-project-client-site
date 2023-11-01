/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Rating,ThinStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';
const Product = ({product}) => {
    const [rating, setRating] = useState(0)
    const{image, title, price} = product || {}

// Declare it outside your component so it doesn't get re-created
const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#FF912C',
    inactiveFillColor: '#FF912C'
  }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h h-56"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"><Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} itemStyles={myStyles} /></h2>
    <p className="font-bold text-[#FF3811]">{title}</p>
    <p className="text-[#FF3811]">{price}</p>
  </div>
</div>
        </div>
    );
};

export default Product;