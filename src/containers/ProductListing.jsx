import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductComponenet from './ProductComponenet';
import { fetchProducts } from "../redux/actions/productActions"

function ProductListing() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    // console.log("products: ",products)
    return (
        <div className='ui grid container'>
            <h1>Product Listing</h1>
            <ProductComponenet />
        </div>
    )
}

export default ProductListing