import React from 'react'
import '../styles/Form.css'

const Form = () => {
return (
    <div className='form_component'>
        <div className='form_image'>
            <img src='https://images.pexels.com/photos/8376154/pexels-photo-8376154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='doctora sonriendo'/>
            <div className='texto_imagen'> 
                <div className='texto_imagen_uno'>
                    <p className='uno'>Capacítate</p>
                    <p className='dos'>gratis</p>
                </div>
                <div><p className='tres'>Lorem ipsum</p></div>
                <div className='linea'></div>
                <div> 
                    <p className='cuatro'>Inscríbete ahora</p>
                </div>
            </div>

            <div className='texto_imagen_dos'>
                    <div className='unoa'><p>✓</p><h4>Lorem ipsum</h4></div>
                    <div className='unob'><p>✓</p><h4>Lorem ipsum</h4></div>
                    <div className='unoc'><p>✓</p><h4>Lorem</h4></div>
                    <div className='unod'><p>Lorem</p> <p>ipsum</p></div>    

            </div>
        </div>
        <div className='form_contain'>
            <div className='title_form'>
                <h3 className='title_form_uno'> !Inscribáse</h3>
                <h3 className='title_form_dos'> GRATIS</h3>
            </div>
            <div className='figura'> </div>
            <form>
                <input type='text' placeholder='Nombre' />
                <input type='text' placeholder='Número de documento'/>
                <input type='text' placeholder='Profesión'/>
                <input type='text' placeholder='Entidad donde labora'/>
                <input type='text' placeholder='Celular'/>
                <input type='text' placeholder='Email'/>
            </form>
                <button className='button_form'> Enviar Inscripcion</button>
        </div>  
    </div>
)
}

export default Form
