import React from 'react'



const Card = ( {prop} ) => {
  return (
    <div className='grid-item'>

      <div className="logo-container" style={{backgroundColor : prop.logoBackground}}>
        <img src={require('../assets/logos/coffeeroasters.svg').default} alt="logo" />
      </div>

      <div className='inner-item'>
        <div className="post-contract">
            <p>{prop.postedAt}</p>
            <span> . </span>
            <p>{prop.contract}</p>
        </div>

        <a href="#"><h3 className='position'>{prop.position}</h3></a>
        <p className='company'>{prop.company}</p>
        <h4 className='location'>{prop.location}</h4>
      </div>
    </div>
  )
}

export default Card

