// src/components/Main.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Main = () => {
  return (
    <>
      <div className="hero border-1 pb-3" style={{ height: '600px' }}>
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
        >
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="card bg-dark text-white border-0 mx-3">
              <img
                className="card-img img-fluid"
                src="https://www.newgenmax.com/wp-content/uploads/2018/07/Ecommerce-Banner-1.jpg"
                alt="Card"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="card-img-overlay d-flex align-items-center">
                <div className="container">
                  <h5 className="card-title text fw-bold text-4xl text-black">
                    New Season Arrivals
                  </h5>
                  <p className="card-text d-none d-sm-block text-black">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Main;
