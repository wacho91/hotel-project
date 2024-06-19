import React from 'react'
import { Link } from 'react-router-dom'
import { footerContact, footerItem, socialIcons } from '../data/Data'
import NewsLetter from '../home/NewsLetter'

const Footer = () => {
  return (
    <>
    <NewsLetter />
      <div className='container-fluid bg-dark text-light footer'>
        <div className='container pb-5'>
          <div className='row g-5'>
            <div className='col-md-6 col-lg-4'>
              <div className='bg-primary rounded p-4'>
                <Link to='/'>
                  <h1 className='text-white text-uppercase mb-3'>Hotelir</h1>
                </Link>
                <p className='text-white mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta impedit consectetur, quasi earum dignissimos reiciendis quaerat reprehenderit totam cupiditate quo placeat, magni atque? Consequuntur, sequi? Quos voluptatibus sed minima?</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <h6 className='section-title text-start text-primary text-uppercase mb-4'>Contact</h6>
              {
                footerContact.map((val, index) => (
                  <p className='mb-2'>{val.icon} {val.name}</p>
                ))
              }
              <div className='d-flex pt-2'>
                {
                  socialIcons.slice(0, 4).map((val, index) => (
                    <a href="" className='btn btn-outline-light btn-social'>{val.icon}</a>
                  ))
                }
              </div>
            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='row gy-5 g-4'>
                {
                  footerItem.map((item, index) => (
                    <div className='col-md-6'>
                      <h6 className='section-title text-start text-primary text-uppercase mb-4'>{item.header}</h6>
                      {
                        item.UnitItem.map((val, index) => (
                          <a href="" className='btn btn-link'>{val.name}</a>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
