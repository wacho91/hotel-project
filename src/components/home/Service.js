import React from 'react'
import CommonHeader from '../common/CommonHeader'
import { services } from '../data/Data'

const Service = () => {
  return (
    <>
      <div className='container-xxl py-5'>
        <div className='container'>
          <CommonHeader 
            heading='Our Services'
            title='Services'
            subtitle='Explore our'
          />
          <div className='row g-4'>
            {
              services.map((item, index) => (
                <div className='col-lg-4 col-md-6'>
                  <a href='' className='service-item rounded'>
                    <div className='service-icon bg-transparent border rounded p-1'>
                      <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                        {item.icon}
                      </div>
                    </div>
                    <h5 className='mb-3'>{item.name}</h5>
                    <p className='text-body mb-0'>{item.discription}</p>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Service