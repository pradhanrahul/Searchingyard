import React from 'react'
import{ShoppingCart,Search,LocalShipping,WifiCalling3,Sync} from '@mui/icons-material';
import hero from "../assets/images/hero-bg.jpg";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <>
        <div className="headermain">
            <div className='main-navbar'>
              
            <div className='logo1'>
                <img src={logo} alt="" srcset="" />
            </div>
            <div className='menu-links'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Page</a>
                        </li>
                        <li>
                            <a href='#'>News</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                        <li>
                            <a href='#'>Shop</a>
                        </li>
                    </ul>
                </div>
                <div className='medias'>
                    <ul className='socials'>
                        <li>
                            <ShoppingCart />
                        </li>
                        <li>
                            <Search />
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className="fresh">
                <h4>FRESH  & ORGANIC</h4>
            </div>
            <div className="fresh1">
                <h1>Delicious Seasonal Fruits</h1>
            </div>
            <div className="btn">
                <button>Fruit Collection </button>
                <button>Contact Us</button>
            </div>
            

        </div>
        <div className="shipping">
                <ul>
                    <li><LocalShipping />Free Shipping</li>
                    <li><WifiCalling3/>24/7 Support</li>
                    <li><Sync/>Refund</li>
                </ul>
            </div>
        </>
    )
}

export default Header
