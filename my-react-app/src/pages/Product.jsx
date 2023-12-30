import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);

    async function getProducts() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            console.log(response.data);
            setProducts(response.data);  // Corrected this line
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products && products.slice(0, visibleProducts).map((item) => (

                        <Card data={item} />

                    ))}
                </div>
                {visibleProducts < products.length && (
                    <button type='button' className='btn btn-primary mx-4 my-4' onClick={() => setVisibleProducts(visibleProducts + 4)} >Show More</button>)}

                {visibleProducts > 4 && (
                    <button type='button' className='btn btn-warning mx-4 my-4' onClick={() => setVisibleProducts(visibleProducts - 4)} >Show less</button>)}


            </div>
        </>
    );
};

export default Product;
