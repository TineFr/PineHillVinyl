import {useState, useEffect} from 'react'
import {Container, Form, Input, Submit, Title, FormGroup, Label} from '../authentication-form.styled'



const LoginComponent = () => {

    const [user, setUser] = useState({email: "", password: ""})
    const [error, setError] = useState("");

    const submitHandler =  (e : any) => {
      e.preventDefault();
      console.log(user);

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
          <Submit type="submit" value="login">Sign in</Submit>
        </form>
    </Container>
  )
}

export default LoginComponent