import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../hooks/useForm'
import { loginAsync } from '../redux/actions/Actions'
import { Boton,Facebook, Formulario, Google, Label, Redes, Subtitulo, Titulo, Wrapper } from '../styles/loginStyled'
export const Login = () => {

   const dispatch = useDispatch()
   const [formValue, handleInputChange, rest]= useForm({
     email: '',
     password:''
   })

   const {email, password}=formValue

   const handleSubmit= (e)=>{
     e.preventDefault()
     dispatch(loginAsync(email, password))
     rest()
   }

  return (
    <div>
    <Wrapper>
        <Formulario  onSubmit={handleSubmit}>
          <Titulo>
          <img src='https://res.cloudinary.com/dgzfc4clj/image/upload/v1654102012/Soluci%C3%B3n_de_credito_1_u2o7b8.png' style={{width:'111px', display:'flex',align:'center'}} alt='logo'/>
          </Titulo>
          <Label  type='text' placeholder='Usuario' autoComplete='off' value={email} onChange={handleInputChange}/>
          <Label type='password' placeholder='Contraseña' autoComplete='off'/>

          <Redes>
          <Facebook>
                <img src='https://res.cloudinary.com/dgzfc4clj/image/upload/v1654107198/facebook_gcmhjc.png' style={{width:'41px', display:'flex',align:'center'}} alt='facebook'/>
            </Facebook>
            <Google>
               <img src='https://res.cloudinary.com/dgzfc4clj/image/upload/v1654107186/google_zj5e6q.png' style={{width:'41px', display:'flex',align:'center'}} alt = 'google'/>
            </Google>
            </Redes>
            <Subtitulo>¿No tienes cuenta? Registrate</Subtitulo>
            <Boton>Iniciar Sesion</Boton>
        </Formulario>

        </Wrapper>
    </div>
  )
}
