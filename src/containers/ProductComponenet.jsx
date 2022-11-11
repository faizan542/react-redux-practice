import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponenet() {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <>
            <div className='container my-3'>
                <div className='row g-3'>
                    {products.map((products) => {
                        const { id, title, image, price, category } = products
                        return <div className='col-12 col-md-3 p-2' key={id}>
                            <div style={{ height: "100%" }} className="border rounded p-3">
                                <Link to={`/product/${id}`} className="text-sytling">
                                    <div className="text-center">
                                        <img src={image} alt={title} width={100} height={100}/>
                                    </div>
                                    <div className='py-3 d-block text-truncate'>
                                        <div className='title'>{title}</div>
                                        <div className='price'>$ {price}</div>
                                        <div className='category'>{category}</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductComponenet