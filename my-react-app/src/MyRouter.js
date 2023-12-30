import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import Product from "./pages/Product";

const MyRouter = () => {
  return (
  
        <Router>
            <Routes>
                <Route path="/" element={<Layouts/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="features" element={<Features/>}/>
                    <Route path="product" element={<Product/>}/>


                </Route>
            </Routes>
        </Router>


  )
}

export default MyRouter