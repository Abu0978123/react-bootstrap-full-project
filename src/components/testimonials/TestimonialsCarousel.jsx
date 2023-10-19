import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { testimonialsInfo } from './data'

const TestimonialsCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      interval={3000}
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
    >
      {testimonialsInfo.map((item) => (
        <div>
          <img src={item.img} alt={item.name} />
          <div className='myCarousel'>
            <h3>{item.name}</h3>
            <p>{item.review}</p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default TestimonialsCarousel
