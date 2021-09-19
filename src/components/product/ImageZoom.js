import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const ImageZoom = () => (
    <RootStyle>
        <MainImage src="http://gianhang0dong.youth.hcmue.edu.vn/Public/images/acernitro5.png" alt="" />
        <Stack direction='row' spacing={1} sx={{ mt: '3px' }}>
            <MoreImage className="active" src="http://gianhang0dong.youth.hcmue.edu.vn/Public/images/acernitro5.png" alt="" />
            <MoreImage src="http://gianhang0dong.youth.hcmue.edu.vn/Public/images/acernitro5.png" alt="" />
            <MoreImage src="http://gianhang0dong.youth.hcmue.edu.vn/Public/images/acernitro5.png" alt="" />
            <MoreImage src="http://gianhang0dong.youth.hcmue.edu.vn/Public/images/acernitro5.png" alt="" />
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
    height: '360px',
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
