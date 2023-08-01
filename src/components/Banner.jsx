import React from 'react'
import "../Styles/Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <img className='banner__img' src="banner.png" alt="" />
        <div className='banner__darken'></div>
        <p>Chez vous, partout et ailleurs</p>
    </div>
    
  )
}

export default Banner