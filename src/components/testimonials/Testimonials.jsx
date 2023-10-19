import React from 'react'
import './testimonials.css'
import TestimonialsCarousel from './TestimonialsCarousel'

const Testimonials = () => {
  return (
    <div id='testimonials' className='testimonials'>
      <h1>my happy clients</h1>
      <div className='container'>
        <div className='testimonials-content'>
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
