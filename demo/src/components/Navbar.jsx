import React from 'react'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';



function Navbar() {
    return (
        <div >
            <nav className='main-nav'>
                <div className='logo'>
                    <h2>
                        <span>S</span>earching
                        <span>Y</span>ard
                    </h2>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>service</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='media'>
                    <ul className='social'>
                        <li>
                            <FaFacebookSquare />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaYoutube />
                        </li>

                    </ul>
                </div>
            </nav>
            <section className='bottom'>
                <p>WellCome to </p>
                <h1>Searching Yard</h1>
            </section>
        </div>
    )
}

export default Navbar
