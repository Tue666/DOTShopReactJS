import { styled } from '@mui/material/styles';
import { Stack, TextField, Button } from '@mui/material';
import { ReadMore } from '@mui/icons-material';

import Stars from '../Stars';

const FilterCategory = () => (
    <RootStyle>
        <Wrapper>
            <Title>Danh mục sản phẩm</Title>
            <Text>Linh Kiện Máy Tính - Phụ Kiện Máy Tính</Text>
            <Text>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</Text>
            <Text>Thiết Bị Mạng</Text>
            <Text>Thiết Bị Lưu Trữ</Text>
        </Wrapper>
        <Wrapper>
            <Title>Đánh giá</Title>
            <Stack direction='row' alignItems='center'>
                <Stars total={5} rating={5} />
                <Text sx={{ mx: '4px', my: '2px' }}>5 stars</Text>
            </Stack>
            <Stack direction='row' alignItems='center'>
                <Stars total={5} rating={4} />
                <Text sx={{ mx: '4px', my: '2px' }}>4 stars</Text>
            </Stack>
            <Stack direction='row' alignItems='center'>
                <Stars total={5} rating={3} />
                <Text sx={{ mx: '4px', my: '2px' }}>3 stars</Text>
            </Stack>
        </Wrapper>
        <Wrapper>
            <Title>Giá</Title>
            <TextField label="From" variant="standard" sx={{ mx: 1 }} />
            <TextField label="To" variant="standard" sx={{ mx: 1 }} />
            <Button color='error' variant="contained" startIcon={<ReadMore />} sx={{ mt: '10px' }}>
                Áp dụng
            </Button>
        </Wrapper>
    </RootStyle>
);

const RootStyle = styled(Stack)(({ theme }) => ({
    width: '262px',
    borderRight: `2px solid ${theme.palette.background.default}`,
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: '10px'
    }
}));

const Wrapper = styled('div')(({ theme }) => ({
    padding: '10px',
    backgroundColor: theme.palette.background.paper,
    fontSize: '14px',
    borderBottom: `2px solid ${theme.palette.background.default}`
}));

const Title = styled('span')({
    fontWeight: 'bold',
    fontSize: '15px',
    display: 'block'
});

const Text = styled('span')({
    fontSize: '14px',
    margin: '10px 0',
    cursor: 'pointer',
    display: 'block',
    '&:hover': {
        color: '#f53d2d'
    }
});

export default FilterCategory;
