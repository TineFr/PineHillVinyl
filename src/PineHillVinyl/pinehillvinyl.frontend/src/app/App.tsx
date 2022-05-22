import AOS from 'aos';
import 'aos/dist/aos.css'; 
import RouterComponent from './components/main/navigation/router';
import { useEffect } from 'react';


function App() {
    useEffect(() =>{
        AOS.init();
    }, [])
    return (

        <RouterComponent/>
    );
}

export default App;