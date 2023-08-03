import React from 'react'
import Banner from '../components/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid.jsx'
import "../Styles/Home.css"

function Home() {
  return (
    <>
      <Banner image={"banner.png"} text="Chez vous, partout et ailleurs"/>
      <ApartmentGrid />
    </>

    
  )
}

export default Home