'use client'
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Center from "./components/Center";
import Data from "../app/Data/Data.json";

export default function Home() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      < Center />
    </BrowserRouter>
  ) : null;
}
