import { Container, Stack, Breadcrumbs, Link, Typography } from '@mui/material';

import { CartList, TotalPrice } from '../components/cart';

const Cart = () => (
    <Container className="wide-container">
        <Breadcrumbs separator='›' sx={{ pb: '5px' }}>
            <Link underline='none' fontSize='15px' color='inherit' href='/'>
                Trang chủ
            </Link>
            <Typography fontSize='15px' color='text.primary'>
                Giỏ hàng
            </Typography>
        </Breadcrumbs>
        <Stack
            direction={{ xs: 'column', sm: 'column', lg: 'row' }}
            justifyContent='space-between'
        >
            <CartList />
            <TotalPrice />
        </Stack>
    </Container>
);

export default Cart;
