import './hero-component.scss';


function Hero() {
    {
        return (
            <>
            <div className="hero-container">
                <div className='video-container'>
                    <video  className="hero-video" loop autoPlay muted >
                        <source
                        src={require('../../../../assets/videos/hero.mp4')}
                        type="video/mp4"
                        />
                    </video>
                </div>
                
            </div>


{/* 




            <div className="hero">
                <img className='vinyl-record'
                src={require('../../../../assets/images/vinyl-record.png')}alt="vinyl record"></img>
            </div> */}
            </>
        );
    }
}

export default Hero;
