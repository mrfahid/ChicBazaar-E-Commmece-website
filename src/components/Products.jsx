import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { addCart } from '../Redux/action';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
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
        const response = await fetch(`https://fakestoreapi.com/products/`);
        if (componentMounted) {
          const productData = await response.json();
          setData(productData);
          setFilter(productData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
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

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {filter.map((product) => (
        <div
          key={product.id}
          className="mx-auto mt-11 w-full md:w-80 transform overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            className="h-48 w-full object-cover object-center"
            src={product.image}
            alt="Product Image"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              {product.title}
            </h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
              {product.description.substring(0, 90)}...
            </p>
            <div className="flex items-center mb-4">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                ${product.price}
              </p>
              <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                $25.00
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                20% off
              </p>
            </div>
            <div className="flex justify-between">
            <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Buy Now</Link>


              <button
                onClick={() => addProduct(product)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Latest Products</h2>
        <hr className="w-20 mx-auto mt-2 border-2 border-blue-500" />
      </div>
      <div className="flex justify-center mb-8 space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => filterProduct('jewelery')}
        >
          Jewelery
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => filterProduct('electronics')}
        >
          Electronics
        </button>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
