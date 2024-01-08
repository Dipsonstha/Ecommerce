import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { ColorRing } from 'react-loader-spinner';
// ... (import statements)

const Product = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getProducts() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="col-md-1">
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div>
                </div>
            ) : (
                <div className="container-fluid">
                    {error && <p className="text-danger">{error}</p>}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products && products.slice(0, visibleProducts).map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                    {visibleProducts < products.length && (
                        <button type='button' className='btn btn-primary mx-4 my-4' onClick={() => setVisibleProducts(visibleProducts + 4)} >Show More</button>
                    )}

                    {visibleProducts > 4 && (
                        <button type='button' className='btn btn-primary mx-4 my-4' onClick={() => setVisibleProducts(visibleProducts - 4)} >Show Less</button>
                    )}
                </div>
            )}
        </>
    );
};

export default Product;

