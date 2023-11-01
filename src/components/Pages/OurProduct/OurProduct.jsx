import { useEffect, useState } from "react";
import Product from "./Product";


const OurProduct = () => {
    const[products, setProducts] = useState([])
    useEffect(()=>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="mt-10">
            <div className="space-y-4">
          <h4 className="text-[#FF3811] text-center font-bold">Our Products</h4>
             <h1 className="text-3xl font-bold text-center">Browse Our Products</h1>
             <p className="text-center">The majority have suffered alteration in some form, by injected humour, or randomized <br/> 
             words which do not look even slightly believable. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {
                    products?.map(product =><Product key={product.id} product={product}></Product>)
                 }
          </div>
          <div className="flex justify-center">
          <button className="text-center btn btn-outline mt-5 mb-5 text-[#FF3811]">More Products</button>
          </div>
        </div>
    );
};

export default OurProduct;