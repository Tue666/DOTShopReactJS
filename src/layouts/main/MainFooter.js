import { styled } from '@mui/material/styles';
import { Stack, Typography, Divider } from '@mui/material';

const MainFooter = () => (
    <RootStyle>
        <Stack direction='row' spacing={3} sx={{ py: 2, flexWrap: 'wrap' }}>
            <Stack sx={{ py: 2, width: '226px' }}>
                <Typography variant='subtitle2' sx={{ py: 1 }}>Customer support</Typography>
                <Typography variant='caption'>Hotline: 1999-9999 (1000 VND/minute, 8-21 hours including Saturday and Sunday)</Typography>
                <Typography variant='caption'>Frequently asked Questions</Typography>
                <Typography variant='caption'>Submit a support request</Typography>
                <Typography variant='caption'>Ordering guide</Typography>
                <Typography variant='caption'>Shipping method</Typography>
                <Typography variant='caption'>Return Policy</Typography>
                <Typography variant='caption'>Installment Instructions</Typography>
                <Typography variant='caption'>Import policy</Typography>
            </Stack>
            <Stack sx={{ py: 2, width: '226px' }}>
                <Typography variant='subtitle2' sx={{ py: 1 }}>Shop</Typography>
                <Typography variant='caption'>About shop</Typography>
                <Typography variant='caption'>Recruitment</Typography>
                <Typography variant='caption'>Payment Privacy Policy</Typography>
                <Typography variant='caption'>Privacy policy of personal information</Typography>
                <Typography variant='caption'>Complaint handling policy</Typography>
                <Typography variant='caption'>terms of use</Typography>
            </Stack>
            <Stack sx={{ py: 2, width: '226px' }}>
                <Typography variant='subtitle2' sx={{ py: 1 }}>Cooperation and association</Typography>
                <Typography variant='caption'>Regulations on operation of E-commerce trading floor</Typography>
                <Typography variant='caption'>Selling with Tiki</Typography>
            </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ py: 2 }}>
            <Typography variant='caption'>Office address: abcxyz, Ward 8, Tan Binh District, Ho Chi Minh City</Typography>
            <Typography variant='caption'>Receive online orders and deliver to your door, not yet support to buy and receive goods directly at the office or order processing center</Typography>
            <Typography variant='caption'>Business Registration Certificate No. 0309532909 issued by the Department of Planning and Investment of Ho Chi Minh City on 06/01/2010</Typography>
            <Typography variant='caption'>© 2021 - Copyright by abc Joint Stock Company - abc.xyz</Typography>
        </Stack>
        <Divider />
        <Stack sx={{ py: 2 }}>
            <Typography variant='subtitle1' sx={{ py: 1 }}>So fast, so good, so cheap</Typography>
            <Typography variant='subtitle2'>Have everything</Typography>
            <Typography variant='caption'>With millions of products from reputable brands and stores, thousands of items from Smartphones to Fresh Fruits and Vegetables, along with ShopNOW super-fast delivery service, shop brings you a shopping experience. online starts with credit. In addition, at shop you can easily use countless other utilities such as buying scratch cards, paying electricity and water bills, insurance services.</Typography>
            <Typography variant='subtitle2'>Promotions and offers are overflowing</Typography>
            <Typography variant='caption'>You want to hunt for a shocking price, Shop has a shocking price every day for you! You are a fan of brands, genuine Official stores are waiting for you. No need to hunt for freeship codes, because shop already has millions of products in the Freeship+ program, unlimited bookings, saving your precious time. Buy more ShopNOW savings packages to receive 100% free shipping 2h same day, or buy premium ShopNOW packages to receive 100% freeship, applicable to 100% products, 100% provinces in Vietnam. Want to save even more? Already have ShopCARD, shop credit card refund 15% on all transactions (maximum refund 600k/month).</Typography>
        </Stack>
        <Divider />
        <Stack sx={{ py: 2 }}>
            <Typography variant='subtitle1' sx={{ py: 1 }}>Product portfolio</Typography>

        </Stack>
    </RootStyle>
);

const RootStyle = styled('div')(({ theme }) => ({
    paddingInline: '20px',
    marginTop: '50px',
    backgroundColor: theme.palette.background.paper
}));



export default MainFooter;
