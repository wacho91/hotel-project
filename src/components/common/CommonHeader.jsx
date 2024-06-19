import React from 'react'

const CommonHeader = ({heading, subtitle, title}) => {
  return (
    <>
      <div className='text-center'>
        <h6 className='section-title text-center text-primary text-uppercase'>{heading}</h6>
        <h1 className='mb-5'>{subtitle}{" "} <span className='text-primary text-uppercase'>{title}</span></h1>
      </div>
    </>
  )
}

export default CommonHeader
