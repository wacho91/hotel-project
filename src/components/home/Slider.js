import React from 'react'
import Slider from 'react-slick'
import { testimonial } from '../data/Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  }
  return (
    <>
      <div className='constainer-xxl testimonial my-5 bg-dark'>
        <div className='container'>
          <div className='owl-carousel testimonial-carousel py-5'>
            <Slider {...settings}>
              {
                testimonial.map((item, index) => (
                  <div className='testimonial-item position-relative bg-white rounded overflow-hidden'>
                    <p>{item.description}</p>
                    <div className='d-flex align-items-center'>
                      <img src={item.img} alt='img' style={{width: "45px", height: "45px"}} className='img-fluid flex-shring-0 rounded'/>
                      <div className='ps-3'>
                        <h6 className='fw-bold mb-1'>{item.name}</h6>
                        <small>{item.profession}</small>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sliders
