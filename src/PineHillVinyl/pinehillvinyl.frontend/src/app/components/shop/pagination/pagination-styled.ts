import styled from 'styled-components/macro'
import {colors} from '../../../../styles/variables'
import ReactPaginate from 'react-paginate';


export const PaginationComponent = styled(ReactPaginate)`


        display: flex;
        flex-direction: row;
        gap: 20px;

a{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
}


a:hover {
        background-color: ${colors.red};
        color: #fff;
      }

    li.selected > a {
    background-color: ${colors.red};
    color: #fff;
    }
    li.next > a {

    border: 1px solid ${colors.red}


    }
    li.next &{
        .disabled > a {

background-color: lightgrey;


}

    } 
    li.previous > a {
    border: 1px solid ${colors.red}
    }
li{
    list-style-type: none;
}

`


export const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin: 50px auto;
        grid-column: 2;

`

// export const PageButton = styled.li`

// list-style: none;
// background-color: white;
// cursor: pointer;

//     svg{
//         font-size: calc(15px + 2vw);
//         color: ${colors.red};
//         margin-top: 3px;
//     }

//     button{
//     width: 10vw;
//     height:10vw;
//     max-width: 50px;
//     max-height: 50px;
//     border: 1px solid lightgrey;  
//     background-color: ${colors.white};
//     color: ${colors.black};
//     }
// `



