import React from 'react'
import Header from '../assets/components/Header'
import SpecialityMenu from '../assets/components/SpecialityMenu'
import TopDoctors from '../assets/components/TopDoctors'
import Banner from '../assets/components/Banner'

const Home = () => {
  return (
    <div>
        <Header />
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
    </div>
  )
}

export default Home