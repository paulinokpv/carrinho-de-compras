import React from "react";
import Products from "./Products";
function CartItem({item, onUpdateCart, onRemoveFromCart}){
    return(
        <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div>
              <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(parseInt(e.target.value))}/>
            </div>
            <button onClick={(e) => onRemoveFromCart(item)}>remove</button>
        </div>
    )
}
export default CartItem;