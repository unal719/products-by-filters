import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import { ProductItem } from '../models/ProductsModel';
import { loadSelectedProductById, updateSelectedProduct } from '../store/actions';
import { RootState } from '../store/store';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { productItemInitialState } from '../store/types';


function ProductDetail() {
  const dispatch = useDispatch();
  let { productId } = useParams<{ productId?: string }>();

  const selectedProduct = useSelector<RootState, ProductItem>((state) => state.products.selectedProductItem!);

  useEffect(() => {
    dispatch(updateSelectedProduct(productItemInitialState))
    if (!productId || productId === null || productId === undefined) {
      return
    }
    dispatch(loadSelectedProductById(+productId))
    window.scrollTo(0, 0);
  }, [productId])


  return (
    <div className="main-wrapper">
      <div className="product-detail-wrapper">
        <Carousel width="599px" thumbWidth={110}>
          {selectedProduct.additional_image_link?.map((link: string, index: number) => {
            return (
              <div key={index}>
                <img src={link} alt={`${selectedProduct?.gtin}_${index}`} />
              </div>
            )
          })}
        </Carousel>
        <div className="product-detail">
          <h4 className="detail-header"> {selectedProduct.title} </h4>
          <div className="product-details">
            <p className="product-key">Gender:</p>
            <p className="product-value"> {selectedProduct.gender.toUpperCase()} </p>
          </div>

          <div className="product-details">
            <p className="product-key">Price:</p>
            <p className="product-value"> {selectedProduct.price} </p>
          </div>

          <div className="product-details">
            <p className="product-key">Sale Price:</p>
            <p className="product-value"> {selectedProduct.sale_price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;