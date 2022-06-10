import {useState, useEffect} from 'react'
import {Container, Form, Input, Submit, Title, FormGroup, Label, Error} from '../authentication-form.styled'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginComponent = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: ""})
    const [error, setError] = useState("");

    const submitHandler =  (e : any) => {
      // e.preventDefault();
      axios.post("http://localhost:5000/api/v1/auth/login", user)
      .then(res => {
        sessionStorage.setItem("jwt", res.data.jwt);
        console.log(sessionStorage.getItem("jwt"))
        navigate('/account');
      })
      .catch((err) => {
        setError(err.response.data.message);
        });;
    }

  return (
    <Container>
      <Title>Sign in</Title>
        <form onSubmit={submitHandler}>  
          <FormGroup>      
            <Label htmlFor="email">E-mail</Label>  
            <Input type='email' name='email' onChange={e => setUser({...user, email:e.target.value})} value={user.email}/><br/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>  
            <Input type='password' name='password' onChange={e => setUser({...user, password:e.target.value})} value={user.password}/><br/>
          </FormGroup>  
          <Error>{error}</Error>
          <Submit type="submit" value="login">Sign in</Submit>
        </form>
    </Container>
  )
}

export default LoginComponent