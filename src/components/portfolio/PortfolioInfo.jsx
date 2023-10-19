import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPortfolioId } from './data'
import cityGuide from './images/city-guide-app.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons'

const PortfolioInfo = () => {
  let params = useParams()
  let portfolioItemId = getPortfolioId(parseInt(params.portfolioId))
  return (
    <>
      <div className='portfolio-info'>
        <Link to='/'>
          <FontAwesomeIcon className='cancelIcon' icon={faRectangleXmark} />
        </Link>
        <h2>{portfolioItemId.title}</h2>
        <img src={portfolioItemId.img} alt={portfolioItemId.title} />
        <p style={{ color: 'white' }}>{portfolioItemId.description}</p>
        <a href={portfolioItemId.github} target='_blank'>
          GITHUB: {portfolioItemId.title}
        </a>
        <a href={portfolioItemId.demo} target='_blank'>
          DEMO: {portfolioItemId.title}
        </a>
      </div>
      <div className='portfolio-overlay'></div>
    </>
  )
}

export default PortfolioInfo
