import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton
} from '@mui/material';
import { Favorite, AddShoppingCart, FindInPage } from '@mui/icons-material';

import { CARD_WIDTH } from '../constant';

const CARD = {
    WIDTH: CARD_WIDTH,
    HEIGHT: 'auto'
}

const ProductCard = () => (
    <RootStyle className="product-card">
        <ImageWrapper>
            <Image
                component="img"
                height="200"
                image="https://cf.shopee.vn/file/01fdd4d7dcee6fabebc22b9a8f138bc2_tn"
                alt="Paella dish"
            />
        </ImageWrapper>
        <CardContent>
            {/* Product Name */}
            <Link to='/detail/slug-product-name'>
                <Name noWrap title="This impressive paella is a p. This impressive paella is a p">
                    This impressive paella is a p. This impressive paella is a p
                </Name>
            </Link>
            {/* Product Price */}
            <Grid container alignItems="center">
                <Grid item lg={9} sm={9}>
                    <Price variant="body2" component="span">20.000.000 vnđ</Price>
                </Grid>
                <Grid item lg={3} sm={3}>
                    <Typography
                        variant="body2"
                        component="span"
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
                    >
                        68
                    </Typography>
                </Grid>
                <Grid item lg={8} sm={8}>
                    <OldPrice variant="body2" component="span">27.000.000 vnđ</OldPrice>
                    <Price variant="body2" component="span">-10%</Price>
                </Grid>
                <Grid item lg={4} sm={4}>
                    <Typography
                        variant="body2"
                        component="span"
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
                    >
                        was sold
                    </Typography>
                </Grid>
            </Grid>
            <Typography
                variant="body2"
                component="span"
                noWrap
                sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
            >
                68 was sold
            </Typography>
        </CardContent>
        <CardActions>
            <Link to='/auth'>
                <IconButton aria-label="add to carts">
                    <AddShoppingCart />
                </IconButton>
            </Link>
            <Link to='/auth'>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
            </Link>
            <Link to='/detail/slug-product-name'>
                <IconButton aria-label="add to favorites">
                    <FindInPage />
                </IconButton>
            </Link>
        </CardActions>
    </RootStyle>
);

const RootStyle = styled(Card)(({ theme }) => ({
    width: CARD.WIDTH,
    position: 'relative',
    borderRadius: '5px',
    margin: '3px',
    padding: '3px',
    boxShadow: '2px 2px 0px rgb(239 239 239)',
    '&:hover': {
        boxShadow: '2px 2px 0px rgb(223 220 220)',
    },
    '& .MuiCardContent-root': {
        padding: '2px 8px'
    },
    '& .MuiCardActions-root': {
        padding: 0
    },
    [theme.breakpoints.down('sm')]: {
        width: '180px',
        margin: '2px',
        '& .MuiCardMedia-root': {
            height: '155px'
        }
    }
}));

const ImageWrapper = styled('div')({
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
});

const Image = styled(CardMedia)({
    transition: '0.3s',
    borderRadius: '5px',
    '&:hover': {
        transform: 'scale(1.1)'
    }
});

const Name = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '17px',
    '&:hover': {
        color: '#f53d2d'
    }
});

const Price = styled(Typography)({
    color: 'red',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'inline-block'
});

const OldPrice = styled(Typography)({
    color: 'gray',
    textDecoration: 'line-through',
    fontSize: '13px',
    marginRight: '3px',
    display: 'inline-block'
});

export default ProductCard;
