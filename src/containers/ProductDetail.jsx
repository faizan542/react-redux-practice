import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';

function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  // console.log(product);

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log("Error", err)
    });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetails();
    };
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="container my-4">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="row g-2">
          <div className="col-md-6 col-12">
            <img className="img-fluid" src={image} />
          </div>
          <div className="col-md-6 col-12">
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <div className="btn btn-primary">Add to Cart</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail