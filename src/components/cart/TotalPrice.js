import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import { CART_WIDTH } from '../../constant';
import { HEADER_HEIGHT } from '../../constant';

const TotalPrice = () => (
    <RootStyle>
        <ContentInner>
            <Wrapper>
                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: '5px' }}>
                    <Typography variant='subtitle2'>Ship Address</Typography>
                    <Link>Change</Link>
                </Stack>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Pihe | 0968366601</Typography>
                <Typography variant='subtitle2'>
                    Chùa liên trì, Xã Suối Cao, Huyện Xuân Lộc, Đồng Nai
                </Typography>
            </Wrapper>
            <Wrapper>
                <Typography variant='subtitle2' sx={{ mb: '5px' }}>Coupon tickets</Typography>
                <Link><i className="fas fa-ticket-alt"></i> Select or enter coupon code</Link>
            </Wrapper>
            <Wrapper>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='subtitle2'>Tạm tính</Typography>
                    <Typography variant='subtitle1'>0 vnđ</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='subtitle2'>Giảm giá</Typography>
                    <Typography variant='subtitle1'>0 vnđ</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='subtitle2'>Tổng cộng</Typography>
                    <Stack alignItems='end'>
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'red' }}>
                            Vui lòng chọn sản phẩm
                        </Typography>
                        <Typography variant='caption'>
                            (Đã bao gồm VAT nếu có)
                        </Typography>
                    </Stack>
                </Stack>
            </Wrapper>
            <OrderButton>Mua hàng (3)</OrderButton>
        </ContentInner>
    </RootStyle>
)

const RootStyle = styled('div')(({ theme }) => ({
    width: `calc(100% - calc(${CART_WIDTH} + 15px))`,
    margin: '10px 0',
    [theme.breakpoints.down('md')]: {
        width: '99.5%'
    }
}));

const ContentInner = styled('div')({
    position: 'sticky',
    top: `calc(${HEADER_HEIGHT} + 10px)`,
});

const Wrapper = styled('div')(({ theme }) => ({
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: theme.palette.background.paper,
    fontSize: '14px',
}));

const Link = styled('span')({
    color: 'rgb(13, 92, 182)',
    cursor: 'pointer'
});

const OrderButton = styled('button')({
    width: '100%',
    backgroundColor: '#f76254',
    borderRadius: '5px',
    color: '#fff',
    height: '40px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f53d2d'
    }
});

export default TotalPrice;
