import React from 'react';
import {useStateValue} from '../service/StateProvier';
import './CheckOut.css'; 
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal';

function CheckOut() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket . To buy one or "Add to basket" next to the item.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket?.map((item)=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            )}
            </div>
            {basket.length > 0 &&(
                <div className="checkout__right">
                     <Subtotal/> 
                </div>
            )}
        </div>
    )
}

export default CheckOut;
