import { Hero, ContactForm, Message, FindUs } from "../components/contact/index"
import Footer from '../components/shared/footer/footer';


function Contact()  {
    return (
        <>   
 <Hero title={'Contact'}/>
 <Message/>
 <ContactForm/>
 <FindUs/>
        </>
    );
}

export default Contact;