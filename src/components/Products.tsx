import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Product } from '../models/ProductsModel';
import { RootState } from '../store/store';

function Products() {
    const products = useSelector<RootState, Product[]>((state) => state.products.productItems!);
    const currentPage = useSelector<RootState, number>((state) => state.products.currentPage);
    return (
        <div>
            <ul className="product-items-wrapper">
                {products.slice((currentPage - 1) * 100, currentPage * 100).map((item: Product) => {

                    return (
                        <li key={item.gtin} className="product-item-card">
                            <div className="gender">
                                <i className={`gender-icon ${item.gender}`}></i>
                            </div>
                            <h4 className="product-title">{item.title}</h4>
                            <Link to={`product/${item.gtin}`} className="navigate-product-detail">
                                <img src={item.image_link} alt={item.title} className="product-thumbnail" />
                            </Link>
                            <div className="card-footer">
                                <div className="price-card">
                                    <span className="price-card-title">Sale Price</span>
                                    <span className="price-badge sale-price"> {item.sale_price} </span>
                                </div>

                                <div className="price-card">
                                    <span className="price-card-title">Price</span>
                                    <span className="price-badge price"> {item.price} </span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}

export default Products;