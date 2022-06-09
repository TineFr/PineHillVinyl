import { ShoppingCartOutlined } from '@material-ui/icons'
import {Amount} from './cart-button.styled'

const CartButton = () => {
  return (
    <Amount badgeContent={3} color='primary'>
        <ShoppingCartOutlined></ShoppingCartOutlined>
    </Amount>
  )
}

export default CartButton