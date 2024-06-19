import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";

const Carousel = () => {

  const slideRef = useRef(null);

  const next = () => {
    if(slideRef.current) {
      slideRef.current.slickNext();
    }
  }

  const previous = () => {
    if(slideRef.current) {
      slideRef.current.slickPrevious();
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='container-fluid p-0 mb-5'>
      <div className='carousel slide'>
        <div className='carousel-inner'>
          <Slider ref={slideRef} {...settings}>
            {
                carouselData.map((val, index) => (
                  <div className='carousel-item' key={index}>
                    <img src={val.img} alt='' className='w-100'/>
                    <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
                      <div className='p-3' style={{maxWidth: "700px"}}>

                        <h6 className='section-title text-white text-uppercase mb-3 animated slideInDown'>{val.subtitle}</h6>
                        <h1 className='display-3 text-white mb-4 animated slideInDown'>{val.title}</h1>
                        <a href=''className='btn btn-primary py-md-3 px-md-5 m-3 animated slideInLeft'>{val.btn1}</a>
                        <a href=''className='btn btn-light py-md-3 px-md-5 animated slideInLeft'>{val.btn2}</a>
                      </div>
                    </div>
                  </div>
                ))
            }
          </Slider>
        </div>
        <button type='button' className='carousel-control-prev' onClick={previous}>
          <span className='carousel-control-prev-icon'></span>
          <span className='visually-hidden'>Previous</span>
        </button>

        <button type='button' className='carousel-control-next' onClick={next}>
          <span className='carousel-control-next-icon'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
