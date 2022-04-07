import './hero-component.scss';
import {useState, useEffect} from 'react';


function Hero() {
    {
        const [darkBackground, setDarkBackGround] = useState(false);

        const changeBackground = () =>{
            if(window.scrollY >= 200){
                setDarkBackGround(true);
            } else setDarkBackGround(false);
        }

        useEffect(() => {
            window.addEventListener('scroll', changeBackground)
        }, [])
        return (
            <>
            <div className="hero-container">
                <div className='video-container'>
                    <video  className={`hero-video${darkBackground? " dark" : ""}`} loop autoPlay muted >
                        <source
                        src={require('../../../../assets/videos/hero.mp4')}
                        type="video/mp4"
                        />
                    </video>
                </div>
                
            </div>
            </>
        );
    }
}

export default Hero;
