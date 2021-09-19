import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import Title from './Title';
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
        <Stack>
            <Title>Suggestions for you</Title>
            <Wrapper
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => (
                    <ProductCard key={item} />
                ))}
                <LoadMoreButton>
                    <Typography variant="subtitle2">
                        Load more
                    </Typography>
                </LoadMoreButton>
            </Wrapper>
        </Stack>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
});

const LoadMoreButton = styled('div')(({ theme }) => ({
    width: '50%',
    height: '50px',
    margin: '10px 0',
    borderRadius: '15px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '5px 3px 7px rgb(145 158 171 / 24%)',
    transition: '0.5s',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export default ProductList;
