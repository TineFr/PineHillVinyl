import Footer from '../components/shared/footer/footer';
import Hero from '../components/home/hero/hero.component';
import { Spotlight } from '../components/home/spotlight/spotlight';
import AvailableSoon from '../components/home/coming-soon/coming-soon.component';
import Events from '../components/home/events/events.component';



function Home() {
    return (
        <>  
        <Hero/>
        <AvailableSoon/>
        <Events/>    
        <Spotlight/>
        </>
    );
}

export default Home;