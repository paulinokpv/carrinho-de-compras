
import { useState, useEffect } from "react";
import Data from "../Data/Data.json"
import Products from "./Products";
function Catalog({onAddToCart}){
  
    return(
      <div>
        <h1 className="text-center mb-5 text-lg font-bolder">Catálogo de produtos</h1>
        <div className=" flex gap-2.5 flex-col p-5 ">
        {Data.map((products) => (
            <Products key={products.id} products={products} onAddToCart={onAddToCart}/>
        ))}
        </div>
      </div>
    );
};
export default Catalog;