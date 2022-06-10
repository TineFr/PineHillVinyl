
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import {Container, Form, Input, Submit, Title, FormGroup, Label} from '../authentication-form.styled'
import {register, reset} from '../../../redux/slices/authSlice'


const RegisterComponent = () => {

    const [user, setUser] = useState({email: "", password: ""})
    const [error, setError] = useState("");
    
    const dispatch = useAppDispatch();
    const {isLoading, isSuccess, isError} = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() =>{
      if (isSuccess){
        dispatch(reset());
        navigate('/login');
      }


    }, [isSuccess, dispatch])
  


  return (
    <Container className='right-panel'>
      <Title>No account yet?</Title>
      <h2>Create an account</h2>
        <form>  
        <FormGroup>      
            <Label htmlFor="username">Username</Label>  
            <Input type='text' name='username'/><br/>
          </FormGroup>
          <FormGroup>      
            <Label htmlFor="email">E-mail</Label>  
            <Input type='email' name='email'/><br/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>  
            <Input type='email' name='password'/><br/>
          </FormGroup>  
          <FormGroup>
            <Label htmlFor="password">Confirm password</Label>  
            <Input type='email' name='password'/><br/>
          </FormGroup>  
          <Submit type="submit" value="login">Register</Submit>
        </form>
    </Container>
  )
}

export default RegisterComponent