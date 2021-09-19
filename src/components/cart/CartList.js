import { styled } from '@mui/material/styles';
import { Stack, Checkbox, Typography, IconButton } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';

import { CART_WIDTH } from '../../constant';
import { HEADER_HEIGHT } from '../../constant';
import CartItem from './CartItem';

const CartList = () => {
    return (
        <RootStyle>
            <Heading>
                <Stack direction='row' alignItems='center' sx={{ pr: '5px' }}>
                    <Stack className="cart-col-1" direction='row' alignItems='center'>
                        <Checkbox size='small' />
                        <Typography variant='subtitle2'>Tất cả (99 sản phẩm)</Typography>
                    </Stack>
                    <Typography className='cart-col-2' variant='subtitle2'>Đơn giá</Typography>
                    <Typography className='cart-col-3' variant='subtitle2'>Số lượng</Typography>
                    <Typography className='cart-col-4' variant='subtitle2'>Thành tiền</Typography>
                    <IconButton className='cart-col-5' color='error'>
                        <DeleteForeverOutlined />
                    </IconButton>
                </Stack>
            </Heading>
            <Content>
                {[1, 2, 3, 4, 5, 6].map(item => (
                    <CartItem key={item} />
                ))}
            </Content>
        </RootStyle>
    )
};

const RootStyle = styled('div')({
    width: CART_WIDTH
});

const Heading = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    position: 'sticky',
    top: `calc(${HEADER_HEIGHT} + 10px)`,
    padding: '5px 0',
    margin: '10px 0',
    zIndex: 99,
    '&:before, &:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '10px',
        backgroundColor: theme.palette.background.default,
    },
    '&:before': {
        top: '-10px'
    },
    '&:after': {
        bottom: '-10px'
    }
}));

const Content = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    paddingRight: '5px'
}));

export default CartList;
