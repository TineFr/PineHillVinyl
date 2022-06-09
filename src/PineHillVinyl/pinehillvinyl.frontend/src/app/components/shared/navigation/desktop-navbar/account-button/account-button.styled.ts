import styled from 'styled-components/macro'
import {colors} from '@styles/variables'
import {MdOutlineManageAccounts} from 'react-icons/md'
import { AccountCircleOutlined } from '@material-ui/icons' 
import {screens} from '@styles/variables'

export const AccountIcon = styled(AccountCircleOutlined)`
    @media ${screens.tablet}{
    display: none !important;
} 
` 

export const Button = styled.div`
color: white;
background-color: ${colors.black};
border: none;
font-family: "onyx";
font-size: 1.3rem;
cursor: pointer;
display: flex;
justify-content: center;
margin-right: 5px;


span{
    display:none;
    @media ${screens.tablet}{
    display: initial;
} 

}




`



