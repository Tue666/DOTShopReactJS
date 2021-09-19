import { styled } from '@mui/material/styles';

const Image = ({ src, alt, sx, children }) => (
    <RootStyle sx={...sx}>
        <Img src={src} alt={alt} />
        {children}
    </RootStyle>
);

const RootStyle = styled('div')({
    position: 'relative',
    overflow: 'hidden'
});

const Img = styled('img')({
    width: '100%',
    height: '100%',
    backgroundSize: '100% auto'
});

export default Image;
