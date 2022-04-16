import {Container, Page, ArrowButton} from './pagination-styled'
import {MdArrowRight, MdArrowLeft} from 'react-icons/md'

const Pagination = (props: any) => {
    
  const pages = [1,3,4,4,5,6,7]
  return (
    <Container>
        <ArrowButton><MdArrowLeft/></ArrowButton>
            {pages.map((item) => 
            {
                return(
                <Page>
                    <button>{item}</button>
                </Page>
                );

            })}
        <ArrowButton><MdArrowRight/></ArrowButton>
    </Container>
  )
}

export default Pagination