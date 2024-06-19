import React from 'react'
import { socialIcons } from '../data/Data'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <>
      <div className='col-lg-3 px-5'>
        <div className='d-inline-flex align-items-center py-2'>
          {
              socialIcons.map((item, index) => (
                <div key={index}>
                  <Link className='me-3'>{item.icon}</Link>
                </div>
              ))
          }
        </div>
      </div>
    </>
  )
}

export default SocialIcons
