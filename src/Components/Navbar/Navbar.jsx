import React, { useState, useContext } from 'react';
import './Navbar.scss';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FiMenu } from 'react-icons/fi'; // Importing hamburger icon

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [menuOpen, setMenuOpen] = useState(false); // State to control hamburger menu
    const { cartItems } = useContext(ShopContext);
    const totalCartItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

    // Function to handle menu click and close dropdown
    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setMenuOpen(false); // Close menu when an item is clicked
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <p>Ladies Fashion</p>
            </div>

            {/* Hamburger Menu (Only visible on Mobile) */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu />
            </div>

            {/* Navigation Menu */}
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li onClick={() => handleMenuClick("shop")}>
                    <Link to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("accessories")}>
                    <Link to="/accessories">Accessories</Link>
                    {menu === "accessories" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("dress")}>
                    <Link to="/dress">Dress</Link>
                    {menu === "dress" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("footwears")}>
                    <Link to="/footwears">Footwears</Link>
                    {menu === "footwears" ? <hr /> : null}
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="cart" />
                    {totalCartItems > 0 && <div className="nav-cart-count">{totalCartItems}</div>}
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
