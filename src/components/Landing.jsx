import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import ContentUno from './ContentUno'
import Contentdos from './Contentdos'
import Footer from './Footer'

const Landing = () => {
  return (
      <div>
          <div>
              <Navbar/>
          </div>
          <div>
              <Form/>
          </div>
          <div>
              <ContentUno/>
          </div>
          <div>
              <Contentdos/>
          </div>
          <div>
              <Footer/>
          </div>
    </div>
  )
}

export default Landing