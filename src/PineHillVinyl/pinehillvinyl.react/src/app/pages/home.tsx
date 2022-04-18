import Footer from '../components/main/footer/footer';
import Hero from '../components/home/hero/hero';
import { Spotlight } from '../components/home/spotlight/spotlight';
import AvailableSoon from '../components/home/available-soon/available-soon';
import Events from '../components/home/events/events';



function Home() {
    return (
        <>   
        <Hero/>
        <AvailableSoon/>
        <Events/>
        
        <Spotlight/>
      {/*   <Footer/>  */}
        </>
    );
}

export default Home;