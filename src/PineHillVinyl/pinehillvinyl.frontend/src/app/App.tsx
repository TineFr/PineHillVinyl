import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import RouterComponent from './components/shared/navigation/router';


function App() {
    useEffect(() =>{
        AOS.init();
    }, [])
    return (

        <RouterComponent/>
    );
}

export default App;