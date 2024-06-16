import { useAuth } from "../../AuthContext";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaSignInAlt, FaBars } from "react-icons/fa";
import ModeButton from "../DarkMode/DarkMode";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const cartCount = useSelector((state) => state.handleCart.length);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-700 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2 dark:bg-[#0E2361]">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 brand">
              ChicBazaar
            </Link>
          </div>

          {/* Search bar, order button, and dark mode switch for larger screens */}
          <div className="flex justify-between items-center gap-4 hidden md:flex">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <Link to="/cart" className="relative">
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-200">
                  Cart
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {cartCount > 0 && (
                <span className="bg-red-500 absolute border-gray-300 -top-0 -right-0 text-white px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <ModeButton />
          </div>

          {/* User section for larger screens */}
          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <div className="group relative cursor-pointer">
                <img
                  src={currentUser.photoURL}
                  alt={currentUser.displayName}
                  className="w-12 h-12 rounded-full border"
                />
                <div className="absolute z-[9999] -right-16 top-12 hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md dark:bg-zinc-800 dark:text-white">
                  <span className="block text-sm p-2 pb-0">{currentUser.displayName}</span>
                  <span className="block truncate text-sm font-medium p-2">{currentUser.email}</span>
                  <NavLink to="/dashboard" className="inline-block w-full rounded-md p-2 border-t-2 hover:bg-primary/20">
                    Dashboard
                  </NavLink>
                  <div className="border-t-2 p-2">
                    <button onClick={logout} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      LogOut
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="transition-all duration-200 text-black px-2 rounded-full flex items-center gap-3 group ml-4 border-none"
                onClick={() => navigate("/login")}
              >
                <FaSignInAlt />
                <span className="cursor-pointer">Log In</span>
              </button>
            )}
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars className="text-xl" />
            </button>
            {currentUser ? (
              <div className="group relative cursor-pointer">
                <img
                  src={currentUser.photoURL}
                  alt={currentUser.displayName}
                  className="w-10 h-10 rounded-full border"
                />
                <div className="absolute z-[9999] -right-16 top-10 hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md dark:bg-zinc-800 dark:text-white">
                  <span className="block text-sm p-2 pb-0">{currentUser.displayName}</span>
                  <span className="block truncate text-sm font-medium p-2">{currentUser.email}</span>
                  <NavLink to="/dashboard" className="inline-block w-full rounded-md p-2 border-t-2 hover:bg-primary/20">
                    Dashboard
                  </NavLink>
                  <div className="border-t-2 p-2">
                    <button onClick={logout} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      LogOut
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="transition-all duration-200 text-black px-2 rounded-full flex items-center gap-3 group ml-4 border-none"
                onClick={() => navigate("/login")}
              >
                <FaSignInAlt />
                <span className="cursor-pointer">Log In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* lower Navbar for larger screens */}
      <div data-aos="zoom-in" className="hidden md:flex justify-center dark:bg-zinc-700 dark:text-white">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="/" className="inline-block px-4 hover:text-primary duration-200">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/kidsWere" className="inline-block px-4 hover:text-primary duration-200">
              Kids Wear
            </NavLink>
          </li>
          <li>
            <NavLink to="/menWere" className="inline-block px-4 hover:text-primary duration-200">
              Men Wear
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="inline-block px-4 hover:text-primary duration-200">
              Contact
            </NavLink>
          </li>

          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <NavLink to="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </NavLink>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                <li>
                  <NavLink to="/trendingProducts" className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    Trending Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bestSelling" className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    Best Selling
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/topratedproducts" className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    Top Rated
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white dark:bg-gray-700 dark:text-white p-4`}>
        <ul className="space-y-4 text-center">
          <li>
            <NavLink to="/" className="block py-2 hover:text-primary duration-200">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menWere" className="block py-2 hover:text-primary duration-200">
              Men's Wear
            </NavLink>
          </li>
          <li>
            <NavLink to="/kidsWere" className="block py-2 hover:text-primary duration-200">
              Kids Wear
            </NavLink>
          </li>
          <li>
            <NavLink to="/topRated" className="block py-2 hover:text-primary duration-200">
              Top Rated
            </NavLink>
          </li>
          <li>
            <div className="flex justify-center">
              <ModeButton />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
