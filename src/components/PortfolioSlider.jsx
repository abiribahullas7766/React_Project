import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PortfolioSlider = () => {
  const images=[
    '/images/project_7.JPG',
    '/images/project_2.JPG',
    '/images/project_3.JPG',
    '/images/cv.JPG',
    '/images/project_code1.JPG',
    '/images/project_4.JPG',
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings} className="lg:-mx-60">
      {images.map((images, index) => (
        <div key={index} className="relative">
           <div className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl"></div>
          <img src={images} alt={`Image &{index + 1}`}/>
          <div className="absolute top-0 left-0 hover:bg-orange/80 w-full h-full flex items-center
          justify-center rounded-2xl cursor-pointer">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-1"></h2>
              <p></p>

            </div>

          </div>
        </div>
        
      ))}

      
    </Slider>
    
  );
};

export default PortfolioSlider;
