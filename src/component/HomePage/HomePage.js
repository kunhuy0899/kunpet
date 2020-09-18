import React from 'react';
import './HomePage.css';
import Product from '../Product/Product';

function HomePage() {
    return (
        <div className="home">

               
                <img className="home__image" src="https://www.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png" alt="" />
               
               
                <div className="home__row">
                    <Product id="123" 
                    title="NEW chó ngáo 2020 kình bỉ cả thế giới"
                    price={113.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/8e/c1/2d/8ec12dc58387f54347a6c4368d723632.jpg">
                    </Product>
                    <Product id="456" 
                    title="Chó vui vẻ nhất hệ mặt trời"
                    price={238.666}
                    rating={5}
                    image="https://i.pinimg.com/564x/44/a1/70/44a170fce56aed3369983940b3b643a6.jpg">
                    </Product>
                </div>
                <div className="home__row">
                    <Product id="789" 
                    title="Mèo siêu ngáo "
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/fe/1d/31/fe1d3182a4138c770cb764496531f02a.jpg">
                    </Product>
                    <Product id="101123" 
                    title="Mèo best thân thiện"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/9f/01/73/9f01736a2bd0986452bd95ef05abf425.jpg">
                    </Product>
                    <Product id="141516" 
                    title="Mèo siêu cà khịa"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/5f/80/23/5f8023f8f76ae6be32e933ec00c27e13.jpg">
                    </Product>
                </div>
                <div className="home__row">
                    <Product id="171619" 
                    title="Chó siêu đạo chích"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/7c/3b/81/7c3b81ea7380800cf006b940ae5799d5.jpg">
                    </Product>
                </div>
        </div>
    )
}

export default HomePage
