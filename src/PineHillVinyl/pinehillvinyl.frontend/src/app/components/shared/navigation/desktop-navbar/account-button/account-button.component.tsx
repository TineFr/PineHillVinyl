import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {AccountIcon, Button} from './account-button.styled'


const AccountButton = (props: any) => {
  
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    let logged = sessionStorage.getItem("logged")
    if (logged) setIsLogged(true);
  }, [sessionStorage ]);


const handleSignIn =  () =>{
  navigate('/login');

}

const handleAccount =  () =>{
  navigate('/account');
}


    let button;
    if (isLogged) {
      button = <Button onClick={() => handleAccount()}>Account</Button>;
      } else {


        button = <Button onClick={() => handleSignIn()}>
                        <AccountIcon/>
                        <span>Sign in</span>
                </Button>;
      }
      
      return (
        <div>
          {button}
        </div>
      );
}

export default AccountButton