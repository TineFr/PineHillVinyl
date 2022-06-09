import styled from 'styled-components/macro'
import {colors} from '@styles/variables'
import {Badge} from '@material-ui/core'

export const Amount = styled(Badge)`
color:${colors.white};
.MuiBadge-colorPrimary{
    background-color: ${colors.red};
}

`
