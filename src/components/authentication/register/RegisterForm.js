import { Stack, TextField, Button } from '@mui/material';

const RegisterForm = () => (
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
        <TextField
            type='password'
            label='Confirm password'
            color='success'
        />
        <Button variant='contained' color='error' sx={{ padding: '15px 0', backgroundColor: '#f76254' }}>
            REGISTER
        </Button>
    </Stack>
)

export default RegisterForm;