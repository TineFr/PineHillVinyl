import {Hero, Footer} from '../components/shared/index';
import SingleText from '../components/about/section/single-text/single-text-component';
import ImageText from '../components/about/section/image-text/image-text-component'
import {AboutUs as data} from '../../data/about-us'


function About(){
    return (
        <>
        <Hero title={'About us'}></Hero>
        <ImageText imageFirst={true} image={data[0].image} position={'flex-end'} message={data[0].message}title={data[0].title}></ImageText>
        <SingleText position={'flex-start'} message={data[1].message}title={data[1].title}></SingleText>
        <ImageText imageFirst={false} image={data[0].image} position={'flex-end'} message={data[0].message}title={data[0].title}></ImageText>
        <SingleText position={'center'} message={data[2].message}title={data[2].title}></SingleText>
        <Footer/>
        </>
    );
};

export default About;
