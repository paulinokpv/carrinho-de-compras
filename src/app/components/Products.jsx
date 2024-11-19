import { useState } from "react";

import React from "react";
function Products({products, onAddToCart}){
    const [quantity, setQuantity] = useState(1)
    return (
     <div  className="bg-white p-5 mb-2.5 rounded border solid-border gap-2.5">
        <img src={products.image} alt={products.name} className="max-w-[200px] max-h-[200px] object-contain"/>
        <h1>{products.name}</h1>
        <p>${products.price}</p>
        <select onChange={(e)=>setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((x) =>(
                <option key={x+1} value={x+1}>{x + 1}</option>
            ))}
        </select>
        <button onClick={()=>{onAddToCart(products, quantity)}} className="bg-blue-500 rounded-lg p-2 hover:bg-blue-800">Adicionar ao carrinho</button>
     </div>
    );
};
export default Products;