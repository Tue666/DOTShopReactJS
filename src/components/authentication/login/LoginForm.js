import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Link, Stack, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Formik, Form, FastField } from 'formik';
import * as yup from 'yup';

import { InputField } from '../../custom-field';

const LoginForm = () => {
    const history = useHistory();
    const initalValues = {
        email: '',
        password: ''
    };
    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .email('This field required an email!')
            .required('This field is required!'),
        password: yup
            .string()
            .required('This field is required!')
    });
    const handleSubmit = values => {
        history.replace('/', values);
    };
    return (
        <Formik
            initialValues={initalValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <Stack spacing={3}>
                        <FastField
                            name='email'
                            component={InputField}
                            type='text'
                            label='Email address'
                            color='success'
                        />
                        <FastField
                            name='password'
                            component={InputField}
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
                        <Button
                            type='submit'
                            variant='contained'
                            color='error'
                            sx={{ padding: '15px 0', backgroundColor: '#f76254' }}
                        >
                            LOGIN
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
