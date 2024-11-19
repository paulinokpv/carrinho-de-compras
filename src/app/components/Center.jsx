"use client"
import Catalog from "./Catalog";
import Cart from "./Cart";
import Thanks from "./Thanks";
import { BrowserRouter, Link, Router, Routes, Route } from 'react-router-dom';
import { useState, useCallback, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Center() {
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState(""); // Estado para armazenar a mensagem do toast
  const [toastType, setToastType] = useState(""); // Estado para armazenar o tipo do toast (success, info, etc.)

  // Função para adicionar ou atualizar o carrinho
  const HandleSubmit = useCallback((products, quantity) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.find((item) => item.id === products.id);
      if (itemExist) {
        setToastMessage(`quantidade do ${products.name} atualizada`);
        setToastType("info");
        return prevItems.map((item) =>
          item.id === products.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        setToastMessage(`${products.name} adicionado com sucesso`);
        setToastType("success");
        return [...prevItems, { ...products, quantity }];
      }
    });
  }, []);

  // Função para atualizar a quantidade de itens no carrinho
  const HandleUpdateCart = useCallback((products, quantity) => {
    setCartItems((prevItems) => {
      setToastMessage(`quantidade do ${products.name} atualizada`);
      setToastType("info");
      return prevItems.map((item) =>
        item.id === products.id ? { ...item, quantity: +quantity } : item
      );
    });
  }, []);
  const HandleRemoveFromCart = (products) => {
   toast.error(`${products.name} foi removido`);
   setCartItems((prevItems) => prevItems.filter((item) => item.id !== products.id))
  }
  // Exibe o toast após a renderização com base na mensagem e tipo
  useEffect(() => {
    if (toastMessage) {
      if (toastType === "info") {
        toast.info(toastMessage);
      } else if (toastType === "success") {
        toast.success(toastMessage);
      }
    }
  }, [toastMessage, toastType]); // Apenas será chamado quando `toastMessage` ou `toastType` mudarem

  return (
    <div className="m-0 p-0">
      <nav className="bg-black p-2.5 text-white">
        <Link to="/" className="mr-5">Catálogo</Link>
        <Link to="/Cart">Carrinho</Link>
      </nav>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={HandleSubmit} />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} onUpdateCart={HandleUpdateCart} onRemoveFromCart={HandleRemoveFromCart}/>} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
}

export default Center;