import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Checkbox, Typography, IconButton } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';

const CartItem = () => {
    return (
        <Stack direction='row' alignItems='center' sx={{ py: '30px', borderBottom: (theme) => `2px solid ${theme.palette.background.default}` }}>
            <Stack className="cart-col-1" direction='row' alignItems='center'>
                <Checkbox size='small' />
                <Image src="http://gianhang0dong.youth.hcmue.edu.vn/Public/images/acernitro5.png" />
                <Link to='/detail/:slug'>
                    <Name>Điện Thoại Xiaomi Redmi Note 10 Pro (8GB/128GB) - Hàng Chính Hãng</Name>
                </Link>
            </Stack>
            <Stack>
                <Typography className='cart-col-2' variant='subtitle2'>20.000.000 vnđ</Typography>
                <Stack className="cart-col-2" direction='row' alignItems='center' spacing={1}>
                    <Typography variant='subtitle2' component='span' sx={{ fontSize: '12px', textDecoration: 'line-through' }}>
                        27.000.000 vnđ
                    </Typography>
                    <Typography variant='subtitle2'>-10%</Typography>
                </Stack>
            </Stack>
            <Stack className='cart-col-3' direction='row' alignItems='center'>
                <Button className="quantity-button disabled">-</Button>
                <input type="text" className="quantity-input" defaultValue="1" />
                <Button className="quantity-button ">+</Button>
            </Stack>
            <Typography className='cart-col-4' variant='subtitle2'>20.000.000 vnđ</Typography>
            <IconButton className='cart-col-5' color='error'>
                <DeleteForeverOutlined />
            </IconButton>
        </Stack>
    )
};

const Image = styled('img')({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '10px'
});

const Name = styled('span')({
    fontSize: '14px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&:hover': {
        color: '#f53d2d'
    }
});

const Button = styled('button')({
    cursor: 'pointer',
    width: '30px',
    '&.disabled': {
        pointerEvents: 'none !important'
    },
    '&:hover': {
        border: '1px solid #2195f3'
    }
});

export default CartItem;
