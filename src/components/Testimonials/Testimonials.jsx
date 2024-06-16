import Slider from "react-slick";

import { FaBookmark, FaHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsAmazon } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io5";
import { FaMeta } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    text: "This @pagedone has helped me save money, reduce my debt, and invest in my future - it's the complete financial package.",
    author: "Annette Black",
    handle: "@annetteblack35",
    platform: "instagram",
    img: "https://via.placeholder.com/50",
    rating: 5,
  },
  {
    id: 2,
    text: "I love how this @pagedone makes it easy to track my portfolio.",
    author: "Marvin McKinney",
    handle: "@marvinkinney45",
    platform: "twitter",
    img: "https://via.placeholder.com/50",
    rating: 4,
  },
  {
    id: 3,
    text: "@pagedone it's truly been a game-changer for me.",
    author: "Jane Cooper",
    handle: "@janecooper65",
    platform: "facebook",
    img: "https://via.placeholder.com/50",
    rating: 5,
  },
  {
    id: 4,
    text: "Thanks to this @pagedone, I feel more confident and informed about my investment decisions than ever before.",
    author: "Ronald Richards",
    handle: "@ronaldrichards47",
    platform: "linkedin",
    img: "https://via.placeholder.com/50",
    rating: 3,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <h2 data-aos="fade-up" className="text-center text-3xl font-bold mb-8">
        Trust our customers
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg relative">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.handle}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar
                        key={index}
                        className={`text-yellow-500 ${
                          index < testimonial.rating
                            ? "fill-current"
                            : "fill-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                {testimonial.text}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <FaBookmark className="text-blue-500 cursor-pointer" />
                  <FaHeart className="text-red-500 cursor-pointer ml-2" />
                </div>
                {testimonial.platform === "instagram" && <FcGoogle />}
                {testimonial.platform === "facebook" && <FaMeta />}
                {testimonial.platform === "linkedin" && <IoLogoApple />}
                {testimonial.platform === "twitter" && <BsAmazon />}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
