import React from 'react';
import './Product.css';
import { AiFillStar } from 'react-icons/ai';
import {useStateValue} from '../service/StateProvier';
function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        });
    };
    return (
        <div className="product">
            <div className="product___info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) =>(
                        <p><AiFillStar /></p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add basket</button>

        </div>
    )
}

export default Product;
