import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import Title from './Title';
import Slick from './slick/Slick';
import { settingProductSection } from './slick/SlickSettings';
import ProductCard from './ProductCard';

const propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    sx: PropTypes.object
};

const ProductSection = ({ id, title, sx }) => (
    <RootStyle id={id} sx={{ ...sx }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title>{title}</Title>
            <Link to='/auth' underline="hover">
                <Title>View more</Title>
            </Link>
        </Box>
        <Slick settings={settingProductSection}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Slick>
    </RootStyle>
);

const RootStyle = styled('div')({
    margin: '30px 0'
});

ProductSection.propTypes = propTypes;

export default ProductSection;
