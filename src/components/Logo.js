import { NavLink } from 'react-router-dom';
import { styled, Box } from '@mui/material';

const Logo = ({ children, sx }) => (
    <NavLink to='/'>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '109px', height: '109px', ...sx }}>
                <Image src="https://www.graphicsprings.com/filestorage/stencils/bdc5649fb67a5ab2fc8b4a0dc0eac951.png?width=500&height=500" alt="" />
            </Box>
            <Title>{children}</Title>
        </Box>
    </NavLink>
);

const Image = styled('img')({
    width: '100%',
    height: '100%',
    backgroundSize: '100% auto'
});

const Title = styled('span')({
    fontWeight: 'bold',
    fontSize: 20
});

export default Logo;
