import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Typography, Pagination } from '@mui/material';
import { StarRateTwoTone } from '@mui/icons-material';

import { HEADER_HEIGHT } from '../../constant';
import Slick from '../slick/Slick';
import { settingBanners } from '../slick/SlickSettings';
import ProductCard from '../ProductCard';

const propTypes = {
    response: PropTypes.object
};

const FILTER_NAVS = [
    {
        label: 'Phổ biến',
        sort: 'default'
    },
    {
        label: 'Bán chạy',
        sort: 'top_seller'
    },
    {
        label: 'Hàng mới',
        sort: 'newest'
    },
    {
        label: 'Giá rẻ',
        sort: 'price%asc'
    },
    {
        label: 'Giá cao',
        sort: 'price%desc'
    }
];

const ResultContent = ({ response }) => {
    const { category, result } = response;
    const { products, totalProduct, pagination, filter } = result;
    const history = useHistory();
    const handleFilter = sort => {
        history.replace(`?sort=${sort}&page=1`);
        window.scrollTo(0, 0);
    };
    const handlePagination = (event, value) => {
        history.replace(`?sort=${filter.sort}&page=${value}`);
        window.scrollTo(0, 0);
    };
    return (
        <RootStyle>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ m: '15px' }}>
                <Typography variant='h6'>{category.title}: </Typography>
                <Typography variant='subtitle1' fontSize='17px'>{totalProduct}</Typography>
            </Stack>
            <Stack sx={{ mb: '20px' }}>
                <Slick settings={settingBanners}>
                    {category.banners && category.banners.map((image, index) => (
                        <Image key={index} src={image} alt="" />
                    ))}
                </Slick>
            </Stack>
            {totalProduct > 0 && (
                <>
                    <Stack sx={{ position: 'relative' }}>
                        <FilterWrapper direction='row' alignItems='center'>
                            {FILTER_NAVS.map(nav => (
                                <FilterText
                                    key={nav.label}
                                    className={nav.sort === filter.sort ? 'active' : ''}
                                    onClick={() => handleFilter(nav.sort)}
                                >
                                    {nav.label}
                                </FilterText>
                            ))}
                        </FilterWrapper>
                        <Wrapper>
                            {products && products.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}

                        </Wrapper>
                    </Stack>
                    <PaginationWrapper>
                        <Pagination
                            color='primary'
                            page={parseInt(pagination.page)}
                            count={pagination.totalPage}
                            hidePrevButton={pagination.page <= 1}
                            hideNextButton={pagination.page >= pagination.totalPage}
                            onChange={handlePagination}
                        />
                    </PaginationWrapper>
                </>
            )}
            {totalProduct <= 0 && (
                <Stack alignItems='center' spacing={1} sx={{ width: '100%', py: 3 }}>
                    <StarRateTwoTone color='warning' sx={{ fontSize: 'xxx-large' }} />
                    <Typography variant='subtitle1'>No product found :D. Try something new.</Typography>
                </Stack>
            )}
        </RootStyle>
    );
};

const RootStyle = styled(Stack)(({ theme }) => ({
    width: 'calc(100% - 262px)',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}));

const Wrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
});

const Image = styled('img')({
    width: '100%',
    height: '100%'
});

const FilterWrapper = styled(Stack)(({ theme }) => ({
    borderTop: `2px solid ${theme.palette.background.default}`,
    position: 'sticky',
    top: HEADER_HEIGHT,
    zIndex: '99',
    backgroundColor: theme.palette.background.paper
}));

const FilterText = styled('span')({
    textTransform: 'capitalize',
    cursor: 'pointer',
    fontSize: '14px',
    margin: '0 16px',
    padding: '8px',
    '&:hover, &.active': {
        color: '#f53d2d',
        borderBottom: '4px solid #f53d2d'
    }
});

const PaginationWrapper = styled('div')(({ theme }) => ({
    marginTop: '15px',
    height: '50px',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

ResultContent.propTypes = propTypes;

export default ResultContent;
