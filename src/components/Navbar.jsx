import React from 'react'
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar_contain'>
      <div className='navbar_img_uno'>
        <img src='https://www.zarla.com/images/zarla-zona-escolar-1x1-2400x2400-20210603-3wxyt9fjgwvf8rvg7dcm.png?crop=1:1,smart&width=250&dpr=2' alt='logo academia'/>
      </div>
      <div className='navbar_info'>
        <h2>Curso virtual</h2>
        <p>Lorem ipsum dolor, sit amet</p>
        <p>Lorem ipsum dolor, sit amet</p>
      </div>
      <div className='navbar_img_dos'>
        <img src='https://woobsing.com/wp-content/uploads/2019/07/logo-header-woobsing-color.png' alt='logo empresa'/>
      </div>
    </div>
  )
}

export default Navbar
