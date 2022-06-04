import { ReactNode } from 'react'
import {Grid} from './authentication-grid.styled'
import LoginComponent from './login/login-form.component'
import RegisterComponent from './register/register-form.component'

const AuthenticationGrid = ({children} : {children :ReactNode}) => {
  return (
    <Grid>

        <LoginComponent></LoginComponent>
        <RegisterComponent></RegisterComponent>
 


    </Grid>
  )
}

export default AuthenticationGrid