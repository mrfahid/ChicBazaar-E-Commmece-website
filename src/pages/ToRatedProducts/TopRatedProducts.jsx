import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const TopRatedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        // Filter products to include only those with a rating of 4 or above and limit to 3 products
        const topRatedProducts = response.data.products
          .filter(product => product.rating >= 4)
          .slice(0, 3); // Limit to 3 products
        setProducts(topRatedProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              className="rounded-2xl  dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] transition-colors"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={index < product.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <h1 className="text-xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProducts;
