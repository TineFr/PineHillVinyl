import {Container, PageButton} from './pagination-styled'
import {MdArrowRight, MdArrowLeft} from 'react-icons/md'

const Pagination = (props: any) => {
    
  const pages = [1,3,4,4,5,6,7]
  return (
    <Container>
        <PageButton><button><MdArrowLeft/></button></PageButton>
            {pages.map((item, index) => 
            {
                return(
                <PageButton key={index}>
                    <button>{item}</button>
                </PageButton>
                );

            })}
        <PageButton><button><MdArrowRight/></button></PageButton>
    </Container>
  )
}

export default Pagination