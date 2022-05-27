import {Wrapper, Container, Information, Map} from './find-us-styled'

const FindUs = () => {
  return (
    <Wrapper>
        <Container>
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
        <Map>
        <iframe src="https://maps.google.com/maps?q=howest%20brugge&t=&z=13&ie=UTF8&iwloc=&output=embed" width={400} height={400}></iframe>

        </Map>


    </Wrapper>
  )
}

export default FindUs