import { ReactNode } from 'react'
import { useAppSelector } from 'src/app/hooks/redux/hooks'
import Spinner from '../shared/spinner/spinner.component'
import {Grid} from './authentication-grid.styled'
import LoginComponent from './login/login-form.component'
import RegisterComponent from './register/register-form.component'

const AuthenticationGrid = () => {

  const {isLoading} = useAppSelector((state) => state.auth);
  return (
    <Grid>
        <Spinner busy={isLoading}></Spinner>
        <LoginComponent></LoginComponent>
        <RegisterComponent></RegisterComponent>
    </Grid>
  )
}

export default AuthenticationGrid