

import { DoubleArrow } from '@material-ui/icons';
import {Container, Title, Circle, Tags , Tag, Wrapper, Letter} from './hero-styled';
import {useEffect, useState} from 'react'

function Hero() {
    {
        const [loaded, setLoaded] = useState(false);
        useEffect(()=>{
            setLoaded(true);       
            }, [])

        const PineArray: string[] = ["P", "I", "N", "E", "", "H", "I", "L", "L", "", "V", "I","N", "Y", "L"];
        return (
            <>
            <Container id='heroContainer'>
                <Wrapper>
                    <Circle id='circle'>
                    <Tags>
                    <Tag tagBGC="#B83737" delay={1.4} loaded={loaded}><span>WHERE</span></Tag>                        
                    <Tag tagBGC="#A9A9A9" delay={1.8} loaded={loaded}><span>WORDS</span></Tag>  
                    <Tag tagBGC="black" delay={2.2} loaded={loaded}><span>FAIL ,</span></Tag>  
                    <Tag tagBGC="#B83737" delay={3} loaded={loaded}><span>MUSIC SPEAKS</span></Tag>  
                    </Tags>
                    </Circle>
                </Wrapper>
                    <Title> 
                        {PineArray.map((value, index) => {
                            if (value == "") return <Letter loaded={loaded} delay={(index + 1)/30}>&nbsp;</Letter>
                            else return <Letter loaded={loaded} delay={(index + 1)/30}>{value}</Letter>
                        })}                 
                    </Title>
            </Container>
            </>
        );
    }
}

export default Hero;


