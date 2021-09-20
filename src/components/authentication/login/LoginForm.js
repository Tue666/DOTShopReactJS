import {
    Link,
    Stack,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LoginForm = () => {
    return (
        <Stack spacing={3} sx={{ width: '100%' }}>
            <TextField
                type='email'
                label='Email address'
                color='success'
            />
            <TextField
                type='password'
                label='Password'
                color='success'
            />
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <FormControlLabel
                    control={<Checkbox color='error' />}
                    label="Remember me"
                />
                <Link color='#f76254' component={RouterLink} variant='subtitle2' to='#'>
                    Forgot password?
                </Link>
            </Stack>
            <Button variant='contained' color='error' sx={{ padding: '15px 0', backgroundColor: '#f76254' }}>
                LOGIN
            </Button>
        </Stack>
    );
};

export default LoginForm;
