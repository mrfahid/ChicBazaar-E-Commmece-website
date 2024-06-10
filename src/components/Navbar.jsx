import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Navbar, Dropdown } from "flowbite-react";
import { FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import buketImage from "../../assets/buket.png"; 

import { useSelector } from "react-redux";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const cartCount = useSelector((state) => state.handleCart.length);
  const navigate = useNavigate();

  return (
    <Navbar
      fluid
      rounded
      className="fixed z-30 left-0 right-0 top-0 shadow-md bg-gray-100"
    >
      <Navbar.Brand>
        <span className="brand self-center whitespace-nowrap text-2xl font-semibold dark:text-white lg:pl-28">
          ChicBazaar
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                className="w-12 h-12 rounded-full border mr-2"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <button
            className="flex items-center space-x-2 bg-zinc-700 text-white px-3 py-2 mr-3 rounded-full hover:bg-zinc-600 transition-all"
            onClick={() => navigate('/login')}
          >
            <FaSignInAlt />
            <span className="cursor-pointer">Log In</span>
          </button>
        )}
        {/* Cart icon and count */}
        <NavLink
          className="flex items-center space-x-2 text-white px-3 py-3 rounded-full relative lg:mr-28"
          to="/cart"
        >
          <img src={buketImage} alt="Cart" className="w-6 h-6"/> {/* Add className for styling if needed */}
          {/* Format cart count as a badge */}
          {cartCount > 0 && (
            <span className="bg-red-500 absolute top-0 right-0 text-white px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="pb-4">
        <NavLink className="links" to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink className="links" to="/product" activeclassname="active">
          Product
        </NavLink>
        <NavLink className="links" to="/contact" activeclassname="active">
          Contact
        </NavLink>
        {/* Move cart NavLink to Navbar.Collapse */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
