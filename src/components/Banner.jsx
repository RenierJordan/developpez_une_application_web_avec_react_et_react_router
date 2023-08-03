import React from 'react'
import "../Styles/Banner.css"

function Banner(props) {
  return (
    <div className='banner'>
        <img className='banner__img' src={props.image} alt="" />
        <div className='banner__darken'></div>
        <p>{props.text}</p>
    </div>
    
  )
}

export default Banner