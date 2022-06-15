import styled from 'styled-components/macro'
import {colors} from '@styles/variables'
import {Badge} from '@material-ui/core'

export const Amount = styled(Badge)`
z-index:99;
color:${colors.white};
cursor: pointer;
.MuiBadge-colorPrimary{
    background-color: ${colors.red};
}

`
