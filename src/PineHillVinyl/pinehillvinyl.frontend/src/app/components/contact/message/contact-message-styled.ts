import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const Message = styled.div`
text-align: center;
margin: 10px;

span{
    color: ${colors.red};
    font-size: 3rem;

    @media ${screens.mobileL} {
        font-size: 4rem;
    }
}


`