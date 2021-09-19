import { styled } from '@mui/material/styles';

const Title = ({ children, sx }) => (
    <RootStyle sx={{ ...sx }}>
        {children}
    </RootStyle>
);

const RootStyle = styled('span')({
    fontSize: '17px',
    fontWeight: 'bold',
    padding: '15px 20px'
});

export default Title;
