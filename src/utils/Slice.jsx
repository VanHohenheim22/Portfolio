import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="containerSlider">
      <Slider {...settings}>
          <div>
            <a href="https://capable-cranachan-6f5707.netlify.app/" target="_blank">
              <img src="./public/images/RickandMorty.jpeg" />
            </a>
          </div>

          <div>
            <a href="https://ecomerce-grupo3a.netlify.app/" target="_blank">
               <img src="./public/images/Ecomerce.jpeg" />
            </a>
          </div>
          <div>
            <a href="https://splendorous-halva-1d76ad.netlify.app" target="_blank">
              <img src="./public/images/usersApp.jpeg" />
            </a>
          </div>

          <div>
            <a href="https://clever-bubblegum-5ea446.netlify.app" target="_blank">
               <img src="./public/images/Pokeweb.jpeg" />
            </a>
          </div>
        </Slider>
    </div>
  );
};


export default Carousel;
