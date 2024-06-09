import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addCart } from "../../Redux/action";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProducts();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className="col-md-6 col-md-6 py-5">
          <h3 className="text-uppercase text-black-50">{product.category}</h3>
          <h1 className="display-5 text-2xl">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate} <i className="fa fa-star text-yellow-300"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2 mt-20"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3 px-4 py-2 mt-20">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4">
      <div className="d-flex">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
        ))}
      </div>
    </div>
  );

  const ShowSimilarProducts = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      focusOnSelect: true,
      className: "center",
    };

    return (
      <div className="py-4 my-4">
        <h2 className="text-center mb-4 text-2xl">You may also like</h2>
        <Slider {...settings}>
          {similarProducts.map((item) => (
            <div key={item.id} className="text-center p-3">
              <div className="card h-20 border-0">
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.title}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title.substring(0, 15)}...</h5>
                  <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      <div className="row my-5 py-5">
        <div className="col-12">
          {loading2 ? <Loading2 /> : <ShowSimilarProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;
