import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './portfolio.css'
import { portfolioData } from './data'

const Portfolio = () => {
  let portfolioImages = portfolioData()

  return (
    <main id='portfolio' className='portfolio-wrapper py-5'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='row'>
          {portfolioImages.map((item, key) => (
            <Link
              className='col-lg-4 col-md-4 col-sm-6 my-2'
              to={`/portfolio/${item.id}`}
              key={key}
            >
              <div className='portfolio-image-box'>
                <img
                  className='portfolio-img'
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default Portfolio
