import {useState, useEffect} from 'react'
import {Container, Input, Submit, Title, FormGroup, Label, Error} from '../authentication-form.styled'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux/hooks';
import { login, reset } from '../../../../app/redux/slices/authSlice';


const LoginComponent = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: ""})
    const [apiError, setError] = useState("");
    const dispatch = useAppDispatch();
    const {loginIsSuccess, isAuthenticated, loginError} = useAppSelector((state) => state.auth);


    useEffect(() =>{
      if (loginIsSuccess){
        dispatch(reset());   
      }
    }, [loginIsSuccess, dispatch])

    useEffect(() =>{
      if (isAuthenticated){
        navigate(-1);
      }
    }, [isAuthenticated])

    useEffect(() =>{
      if (loginError){
        setError(loginError);
      }
    }, [loginError])

    const submitHandler =  (e : any) => {
      e.preventDefault();
      dispatch(login(user))
  };

  return (
    <Container>
      <Title>Sign in</Title>
        <form onSubmit={submitHandler}>  
          <FormGroup>      
            <Label htmlFor="email">E-mail</Label>  
            <Input type='email' name='email' onChange={e => setUser({...user, email:e.target.value})} value={user.email} required/><br/>
            <span></span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>  
            <Input type='password' name='password' onChange={e => setUser({...user, password:e.target.value})} value={user.password} required/><br/>
            <span></span>
          </FormGroup>  
          <Error>{apiError}</Error>
          <Submit type="submit" value="login">Sign in</Submit>
        </form>
    </Container>
  )
}

export default LoginComponent