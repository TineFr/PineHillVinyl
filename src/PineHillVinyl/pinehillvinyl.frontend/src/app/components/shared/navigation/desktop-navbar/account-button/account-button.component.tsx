import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../../hooks/redux/hooks';
import {AccountIcon, Button} from './account-button.styled'


const AccountButton = () => {
  
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const {isAuthenticated} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated){
      setIsLogged(true);
    }else setIsLogged(false);
  }, [isAuthenticated ]);


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