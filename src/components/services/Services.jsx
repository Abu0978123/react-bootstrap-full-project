import React from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { services } from './data'

const Services = () => {
  return (
    <section id='services' className='services'>
      <h1 className='py-5'>my services</h1>
      <div className='container'>
        <div className='row'>
          {services.map((item, key) => (
            <div className='col-md-3 col-sm-6' key={key}>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon className='icons' icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
