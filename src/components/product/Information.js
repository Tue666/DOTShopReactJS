import { styled } from '@mui/material/styles';
import { Typography, Stack, Button } from '@mui/material';
import { Favorite, AddShoppingCart, LocalShipping } from '@mui/icons-material';

import Stars from '../Stars';

const Information = () => (
    <RootStyle>
        <Typography variant='h6'>
            Điện Thoại Xiaomi Redmi Note 10 Pro (8GB/128GB) - Hàng Chính Hãng
        </Typography>
        <Stack direction='row' alignItems='center' sx={{ my: '3px' }}>
            <Stars total={5} rating={4} />
            <Typography variant='subtitle1' sx={{ mx: '5px', fontSize: '15px' }}>
                (From 69 ratings) | 1200 sold
            </Typography>
            <LocalShipping fontSize='small' color='error' />
        </Stack>
        <PriceWrapper>
            <Pricetext>20.000.000 vnđ</Pricetext>
            <Typography component='span'>
                <Typography
                    component='span'
                    sx={{ color: '#efefef', fontSize: '15px', textDecoration: 'line-through', mx: '5px' }}
                >
                    27.000.000 vnđ
                </Typography>
                -10%
            </Typography>
        </PriceWrapper>
        <Stack sx={{ mb: '35px' }}>
            <Typography component='span'>
                <Typography
                    component='span'
                    sx={{ color: 'rgb(120, 120, 120)', fontSize: '15px', mx: '5px' }}
                >
                    Warranty period:
                </Typography>
                18 tháng
            </Typography>
            <Typography component='span'>
                <Typography
                    component='span'
                    sx={{ color: 'rgb(120, 120, 120)', fontSize: '15px', mx: '5px' }}
                >
                    Warranty form:
                </Typography>
                Bảo hành điện tử
            </Typography>
            <Typography component='span'>
                <Typography
                    component='span'
                    sx={{ color: 'rgb(120, 120, 120)', fontSize: '15px', mx: '5px' }}
                >
                    Warranty place:
                </Typography>
                Trung tâm bảo hành
            </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ my: 3 }}>
            <ButtonQ className="quantity-button disabled">-</ButtonQ>
            <input type="text" className="quantity-input" defaultValue="1" />
            <ButtonQ className="quantity-button ">+</ButtonQ>
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ my: 3 }} spacing={1}>
            <Button variant='contained' color='error' endIcon={<AddShoppingCart />}>
                ADD TO CART
            </Button>
            <Button variant='contained' color='secondary' endIcon={<Favorite />}>
                ADD TO FAVOTITES
            </Button>
        </Stack>
    </RootStyle>
);

const RootStyle = styled('div')(({ theme }) => ({
    width: 'calc(100% - 450px)',
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}));

const PriceWrapper = styled('div')({
    width: '80%',
    background: 'linear-gradient(100deg,rgb(255, 66, 78),rgb(253, 130, 10))',
    borderRadius: '5px',
    padding: '15px',
    margin: '20px 0',
    textAlign: 'center',
    color: '#fff'
});

const Pricetext = styled('span')({
    fontSize: '32px',
    fontWeight: 'bold',
    display: 'block'
});

const ButtonQ = styled('button')({
    cursor: 'pointer',
    width: '30px',
    '&.disabled': {
        pointerEvents: 'none !important'
    },
    '&:hover': {
        border: '1px solid #2195f3'
    }
});

export default Information;
