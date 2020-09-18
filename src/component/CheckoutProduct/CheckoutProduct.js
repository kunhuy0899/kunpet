import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useStateValue } from '../service/StateProvier';
import './CheckoutProduct.css';



function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    console.log("danh sách",id,title,image,price,rating);
    const removeFroBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    };
    return (
        <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={image} alt="" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_) =>(
                        <p><AiFillStar /></p>
                    ))}
                    
                    </div>
                    <button onClick={removeFroBasket}>Remove basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct
