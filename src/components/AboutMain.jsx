import React from 'react'
import AboutHeader from './AboutHeader'
import Profile from './Profile'
import Cerification from './Cerification'
import Capacity from './Capacity'
import Footer from './Footer'
import Promoters from './Promoters'

const AboutMain = () => {
  return (
    <>
        <AboutHeader />
        <Profile/>
        <Promoters/>
        <Cerification/>
        <Capacity/>
        <Footer/>
    </>
  )
}

export default AboutMain