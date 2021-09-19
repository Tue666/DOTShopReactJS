import { styled } from '@mui/material/styles';
import { Container, Breadcrumbs, Link, Typography, Stack } from '@mui/material';

import { HEADER_HEIGHT } from '../../constant';
import ProductSection from '../../components/ProductSection';
import ProductList from '../../components/ProductList';
import {
    ImageZoom,
    Information,
    MoreInformation,
    Description,
    Review
} from '../../components/product';

const Detail = () => (
    <Container>
        <Breadcrumbs separator='›' sx={{ pb: '5px' }}>
            <Link underline='none' fontSize='15px' color='inherit' href='/'>
                Trang chủ
            </Link>
            <Link underline='none' fontSize='15px' color='inherit' href='/categories'>
                Thực phẩm tươi sống
            </Link>
            <Link underline='none' fontSize='15px' color='inherit' href='/categories'>
                Thực phẩm đông lạnh khác
            </Link>
            <Typography fontSize='15px' color='text.primary'>
                Điện Thoại Xiaomi Redmi Note 10 Pro (8GB/128GB) - Hàng Chính Hãng
            </Typography>
        </Breadcrumbs>
        <Wrapper sx={{ p: 0, mt: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row', lg: 'row' }} justifyContent='space-between'>
                <ImageZoom />
                <Information />
            </Stack>
        </Wrapper>
        <Wrapper>
            <ProductSection sx={{ m: 0 }} title="Similar products" />
        </Wrapper>
        <Wrapper>
            <MoreInformation />
        </Wrapper>
        <Wrapper>
            <Description />
        </Wrapper>
        <Wrapper>
            <Review />
        </Wrapper>
        <Stack>
            <DiscoverMore>Discover more for you</DiscoverMore>
            <ProductList />
        </Stack>
    </Container>
)

const Wrapper = styled('div')(({ theme }) => ({
    margin: '20px 0',
    padding: '15px',
    backgroundColor: theme.palette.background.paper
}));

const DiscoverMore = styled('div')(({ theme }) => ({
    padding: '15px',
    fontWeight: 'bold',
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: `calc(${HEADER_HEIGHT} + 10px)`,
    zIndex: 99,
    '&:before, &:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '10px',
        backgroundColor: theme.palette.background.default,
        left: 0
    },
    '&:before': {
        top: '-10px'
    },
    '&:after': {
        bottom: '-10px'
    }
}));

export default Detail;
