import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { PATH_AUTH } from '../../routes/path';
import Logo from '../../components/Logo';
import AuthSocial from '../../components/authentication/AuthSocial';
import { LoginForm } from '../../components/authentication/login';

const Login = () => (
    <Stack alignItems='center' sx={{ width: { xs: '100%', lg: '500px' } }} id='form-wrapper'>
        <Stack direction='row' justifyContent='end' alignItems='center' sx={{ width: '100%' }}>
            Don’t have an account? &nbsp;
            <Link color='#f76254' underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Get started
            </Link>
        </Stack>
        <Logo>Sign in to CV Shop</Logo>
        <Typography variant='body1'>Enter your details below.</Typography>
        <AuthSocial />
        <LoginForm />
    </Stack>
);

export default Login;
