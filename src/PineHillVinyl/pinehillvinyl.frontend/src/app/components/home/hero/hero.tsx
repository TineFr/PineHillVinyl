

import {Container, Title, Circle, Tags , Tag, Wrapper} from './hero-styled';

function Hero() {
    {
        return (
            <>
            <Container id='heroContainer'>
                <Wrapper>
                    <Circle id='circle'>
                    <Tags>
                    <Tag tagBGC="#B83737"><span>WHERE</span></Tag>                        
                    <Tag tagBGC="#A9A9A9" ><span>WORDS</span></Tag>  
                    <Tag tagBGC="black" ><span>FAIL ,</span></Tag>  
                    <Tag tagBGC="#B83737"><span>MUSIC SPEAKS</span></Tag>  
                    </Tags>
                    </Circle>
                </Wrapper>
                    <Title>PINE HILL VINYL</Title>
            </Container>
            </>
        );
    }
}

export default Hero;
