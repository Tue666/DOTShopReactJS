import { styled } from '@mui/material/styles';

const MainFooter = () => (
    <RootStyle>

    </RootStyle>
);

const RootStyle = styled('div')(({ theme }) => ({
    height: '400px',
    marginTop: '50px',
    backgroundColor: theme.palette.background.paper
}));

export default MainFooter;
