import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const ImageZoom = () => (
    <RootStyle>
        <MainImage src="https://cf.shopee.vn/file/01fdd4d7dcee6fabebc22b9a8f138bc2_tn" alt="" />
        <Stack direction='row' spacing={1} sx={{ mt: '3px' }}>
            <MoreImage className="active" src="https://cf.shopee.vn/file/01fdd4d7dcee6fabebc22b9a8f138bc2_tn" alt="" />
            <MoreImage src="https://cf.shopee.vn/file/01fdd4d7dcee6fabebc22b9a8f138bc2_tn" alt="" />
            <MoreImage src="https://cf.shopee.vn/file/01fdd4d7dcee6fabebc22b9a8f138bc2_tn" alt="" />
            <MoreImage src="https://cf.shopee.vn/file/01fdd4d7dcee6fabebc22b9a8f138bc2_tn" alt="" />
        </Stack>
    </RootStyle>
);

const RootStyle = styled('div')(({ theme }) => ({
    width: '450px',
    padding: '15px',
    borderRight: `2px solid ${theme.palette.background.default}`,
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        borderBottom: `2px solid ${theme.palette.background.default}`
    }
}));

const MainImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '370px',
    backgroundSize: '100% auto',
    borderBottom: `3px solid ${theme.palette.background.default}`
}));

const MoreImage = styled('img')({
    width: '72px',
    height: '67px',
    backgroundSize: '100% auto',
    cursor: 'pointer',
    '&:hover': {
        border: '1px solid gray',
        borderRadius: '5px'
    },
    '&.active': {
        border: '1px solid #f53d2d',
        borderRadius: '5px'
    }
});

export default ImageZoom;
