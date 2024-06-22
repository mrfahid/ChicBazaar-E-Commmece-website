import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addCart } from "../../Redux/action";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    let componentMounted = true;
  

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://free-ecommerce-api.vercel.app/api/products');
        const result = await response.json();
        if (componentMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch products from the API:', error);
        setLoading(false);
      }
    };
  
    getProducts();
  
    return () => {
      componentMounted = false;
    };
  }, []);
  

  const Loading = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg">
          <Skeleton height={200} />
          <Skeleton height={30} className="mt-4" />
          <Skeleton height={20} width={100} className="mt-2" />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-[#FEBF5F]">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
          {/* card section */}
          {data.map((product) => (
            <div
              data-aos="fade-up"
              key={product.id}
              className="space-y-3 p-4 shadow-md rounded-md w-full h-full max-w-[250px] bg-white dark:bg-gray-800"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-[220px] w-full object-cover rounded-md"
              />
              <div className="truncate">
                <h3 className="font-semibold truncate dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">Category: {product.category}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="dark:text-white">4.5</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-gradient-to-r from-[#2fa0fc] to-[#0572ef] text-white px-2 py-2 rounded-full hover:scale-105 transition duration-300"
                >
                  Buy Now
                </Link>
                <button
                  onClick={() => addProduct(product)}
                  className="bg-gradient-to-r from-[#FDA726] to-[#EF8D05] hover:scale-105 duration-200 text-white py-2 px-2 rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-[#FEBF5F] text-white py-1 px-5 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );

  return loading ? <Loading /> : <ShowProducts />;
};

export default Products;
