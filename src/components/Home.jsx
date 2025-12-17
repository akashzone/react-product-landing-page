
import './Home.css';
import TypedJS from './TypedJS';
import { useState } from "react";


export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>

            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="logo.png" alt="Company Logo" className="logo-image" />
                </div>

                {/* Desktop menu */}
                <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">Location</li>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Contact</li>
                    <li className="menu-login">
                        <button className="loginBtn">Login</button>
                    </li>
                </ul>

                {/* Hamburger */}
                <div
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>


            <main className="main-section">
                <div className="hero-section">
                    <div className="hero-section-left">
                        <h1 className="hero-title">
                            <TypedJS />
                        </h1>

                        <p className='hero-des'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                        <div className="hero-buttons">
                            <button className="exploreBtn">Explore More</button>
                            <button className="shopBtn btn">Shop Now</button>
                        </div>
                        <div className="texts">
                            <span className='availableText'>Also Available on</span>
                        </div>
                        <img src="a.png" alt="AppStore" className="amazonImage" />
                    </div>
                    <div className="hero-section-right">
                        <img src="shoe.png" alt="ShoeImage" className="shoeImage" />
                    </div>
                </div>
            </main>
        </>
    );

}