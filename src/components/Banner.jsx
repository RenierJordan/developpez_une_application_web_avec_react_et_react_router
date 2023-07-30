import React from 'react'
import "../Styles/Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <img className='banner_img' src="banner.png" alt="" />
        <div className='darken'></div>
        <p>Chez vous, partout et ailleurs</p>
    </div>
    
  )
}

export default Banner