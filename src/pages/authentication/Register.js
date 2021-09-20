import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { PATH_AUTH } from '../../routes/path';
import Logo from '../../components/Logo';
import AuthSocial from '../../components/authentication/AuthSocial';
import { RegisterForm } from '../../components/authentication/register';

const Register = () => (
    <Stack alignItems='center' sx={{ width: { xs: '100%', lg: '500px' } }} id='form-wrapper'>
        <Stack direction='row' justifyContent='end' alignItems='center' sx={{ width: '100%' }}>
            Already have an account? &nbsp;
            <Link color='#f76254' underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                Login
            </Link>
        </Stack>
        <Logo>Get started absolutely free.</Logo>
        <Typography variant='body1'>Free forever. No credit card needed.</Typography>
        <AuthSocial />
        <RegisterForm />
    </Stack>
);

export default Register;
