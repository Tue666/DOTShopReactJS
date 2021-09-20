import { styled } from '@mui/material/styles';
import { Container, Breadcrumbs, Link, Typography, Stack } from '@mui/material';
import { ImportContacts, FileCopy, Article, Description as DescriptionIcon, Star, More } from '@mui/icons-material';

import Teleport from '../../components/Teleport';
import { combineLink } from '../../components/ScrollToTop';
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

const actions = [
    { icon: combineLink('information', <ImportContacts />), name: 'Product information' },
    { icon: combineLink('similar-section', <FileCopy />), name: 'Similar products' },
    { icon: combineLink('more-information', <Article />), name: 'More information' },
    { icon: combineLink('descriptions', <DescriptionIcon />), name: 'Product descriptions' },
    { icon: combineLink('review', <Star />), name: 'Ratings - Reviews from customers' },
    { icon: combineLink('product-list', <More />), name: 'Discover more for you' },
];

const Detail = () => (
    <Container>
        <Teleport actions={actions} />
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
        <Wrapper id='information' sx={{ p: 0, mt: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row', lg: 'row' }} justifyContent='space-between'>
                <ImageZoom />
                <Information />
            </Stack>
        </Wrapper>
        <Wrapper>
            <ProductSection sx={{ m: 0 }} id='similar-section' title="Similar products" />
        </Wrapper>
        <Wrapper id='more-information'>
            <MoreInformation />
        </Wrapper>
        <Wrapper id='descriptions'>
            <Description />
        </Wrapper>
        <Wrapper id='review'>
            <Review />
        </Wrapper>
        <Stack>
            <DiscoverMore>Discover more for you</DiscoverMore>
            <ProductList id='product-list' />
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
