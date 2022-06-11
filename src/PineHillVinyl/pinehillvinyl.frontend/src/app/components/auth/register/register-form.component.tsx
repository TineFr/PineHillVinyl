
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import {Container, Form, Input, Submit, Title, FormGroup, Label, Error} from '../authentication-form.styled'
import {register, reset} from '../../../redux/slices/authSlice'
import { RegisterModel } from '../../../../app/models';


const RegisterComponent = () => {

    const [user, setUser] = useState<RegisterModel>({username: "", email: "", password: "", confirmPassword: ""})
    const [apiError, setError] = useState("");
    
    const dispatch = useAppDispatch();
    const {isLoading, isSuccess, registerError} = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() =>{
      if (isSuccess){
        dispatch(reset());
        navigate('/login');
      }

    }, [isSuccess, dispatch])

    useEffect(() =>{
      if (registerError)
      setError(registerError);
    }, [registerError])
  
    const submitHandler =  (e : any) => {
      e.preventDefault();
      dispatch(register(user))
  };

  return (
    <Container className='right-panel'>
      <Title>No account yet?</Title>
      <h2>Create an account</h2>
        <form onSubmit={submitHandler}>  
        <FormGroup>      
            <Label htmlFor="username">Username</Label>  
            <Input type='text' name='username' onChange={e => setUser({...user, username:e.target.value})} value={user.username}/><br/>
          </FormGroup>
          <FormGroup>      
            <Label htmlFor="email">E-mail</Label>  
            <Input type='email' name='email' onChange={e => setUser({...user, email:e.target.value})} value={user.email}/><br/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>  
            <Input type='password' name='password' onChange={e => setUser({...user, password:e.target.value})} value={user.password}/><br/>
          </FormGroup>  
          <FormGroup>
            <Label htmlFor="password">Confirm password</Label>  
            <Input type='password' name='confirmPassword' onChange={e => setUser({...user, confirmPassword:e.target.value})} value={user.confirmPassword}/><br/>
          </FormGroup>  
          <Error>{apiError}</Error>
          <Submit type="submit" value="login">Register</Submit>
        </form>
    </Container>
  )
}

export default RegisterComponent