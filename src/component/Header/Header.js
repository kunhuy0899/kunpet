import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../service/StateProvier';
import logo from './logo_1.png';

function Header() {
    const [{basket}]=useStateValue();
     return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <Link to="/"><img src={logo} alt="" /></Link>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a>
                    <Link to="/">
                            Returns or Orders 
                    </Link>
                    </a></li>
                <li><a>
                    <Link to="/">
                            You Prime
                    </Link>
                    </a>
                </li>
                <li> <a>
                    <Link to="/checkout">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header__optionCount">{basket?.length}</span>
                    </Link>
                    </a>
                </li>
            </ul>
        </nav>
    );     
}

export default Header
