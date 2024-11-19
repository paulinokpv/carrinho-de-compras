import React from "react";
import CartItem from "./CartItem";
function Cart({cartItems, onUpdateCart, onRemoveFromCart}){
    console.log(cartItems);  // Verifique se é um array
    const TotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    return(
     <div>
        {cartItems.length === 0 ? (<h1>Não há items no carrinho</h1>) : (<div>
            {cartItems.map((item)=>(
                <CartItem key={item.id}onUpdateCart={onUpdateCart} item={item} onRemoveFromCart={onRemoveFromCart}/>
            ))}
            <div>
                <p>${TotalPrice.toFixed(2)}</p>
            </div>
        </div>) }
     </div>
    );
};
export default Cart;