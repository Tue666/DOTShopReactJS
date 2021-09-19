import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import Slick from '../slick/Slick';
import { settingBanners } from '../slick/SlickSettings';
import ProductCard from '../ProductCard';

const ResultContent = () => (
    <RootStyle>
        <Stack direction='row' alignItems='center' spacing={1} sx={{ m: '15px' }}>
            <Typography variant='h6'>Thiết bị điện tử, phụ kiện: </Typography>
            <Typography variant='subtitle1' fontSize='17px'>69 kết quả</Typography>
        </Stack>
        <Stack sx={{ mb: '20px' }}>
            <Slick settings={settingBanners}>
                <Image src="https://salt.tikicdn.com/cache/w1080/ts/banner/b3/9c/a2/5b14186136fd9e16f1e538eed5fd170a.jpg.webp" alt="" />
                <Image src="https://salt.tikicdn.com/cache/w1080/ts/banner/8b/4d/81/90f4e63da65d03927e827de10ffebc10.png.webp" alt="" />
                <Image src="https://salt.tikicdn.com/cache/w1080/ts/banner/1c/2c/44/df14fbf0850902d33914e7798a16c547.jpg.webp" alt="" />
                <Image src="https://salt.tikicdn.com/cache/w1080/ts/banner/86/49/a6/8c96a2e06eed73166df55b3d39dab6d8.jpg.webp" alt="" />
            </Slick>
        </Stack>
        <Stack>
            <Stack direction='row' alignItems='center'>
                <FilterText className='active'>Phổ biến</FilterText>
                <FilterText>Bán chạy</FilterText>
                <FilterText>Hàng mới</FilterText>
                <FilterText>Giá rẻ</FilterText>
                <FilterText>Giá cao</FilterText>
            </Stack>
            <Wrapper>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => (
                    <ProductCard key={item} />
                ))}
            </Wrapper>
        </Stack>
    </RootStyle>
);

const RootStyle = styled(Stack)(({ theme }) => ({
    width: 'calc(100% - 262px)',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}));

const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}));

const Image = styled('img')({
    width: '100%',
    height: '100%'
});

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

export default ResultContent;
