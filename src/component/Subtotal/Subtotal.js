import React from 'react';
import './Suntotal.css';
import CurrencyFormat from 'react-currency-format';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import {useStateValue} from '../service/StateProvier';
import {getBasketTotal} from '../service/reducer';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                        <p>
                Subtotal ({basket.length} items):<strong>{` ${value} `}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />this order comtain a gip
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Procees to Checkout</button>
        </div>
    )
}

export default Subtotal
