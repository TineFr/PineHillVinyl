import {Wrapper, Container, Information, Map} from './find-us-styled'

const FindUs = () => {
  return (
    <Wrapper>
        <Container data-aos="fade-right" data-aos-once="true">
        <h1>How to find us...</h1>
        <div>
            <h2>Information</h2>
            <span>information</span>
            <h2>Information</h2>
            <span>information</span>
            <h2>Information</h2>
            <span>information</span>
        </div>
        </Container>
        <Map data-aos="fade-left" data-aos-once="true">
        <iframe src="https://maps.google.com/maps?q=howest%20brugge&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>

        </Map>


    </Wrapper>
  )
}

export default FindUs