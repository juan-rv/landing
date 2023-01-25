import React from 'react'
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import '../styles/Footer.css'

const Footer = () => {
return (
    <div className='footer_content'>
        <div className='first_footer'>
            <div>
                <h2>Prueba maquetación Landing Page</h2>
            </div>
            <div className='first_footer_dos'>
                <h3>
                Desarrollado por Juan Rodríguez
                </h3>
                <div>
                <a href='https://github.com/juan-rv' target='_blank' rel='noreferrer' ><BsLinkedin /></a>
                <a href='https://www.linkedin.com/in/juan-rv/' target='_blank' rel='noreferrer' ><BsGithub /></a> 
            </div>  
            </div>
        </div>

        <div className='footer_end'>
            <h4>copyright 2015 Diseño por Woobsing. Todos los derechos Reservados</h4>
        </div>
    </div>
)
}

export default Footer
