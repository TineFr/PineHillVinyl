import {useState, useEffect} from 'react'
import {Button} from './account-button.styled'


const AccountButton = (props: any) => {

const handleSignIn =  () =>{

}

const handleAccount =  () =>{

}


    let button;
    if (props.isLoggedIn) {
        button = <Button onClick={handleSignIn}>Sign in</Button>;
      } else {
        button = <Button onClick={handleAccount}>My account</Button>;
      }
      
      return (
        <div>
          {button}
        </div>
      );
}

export default AccountButton