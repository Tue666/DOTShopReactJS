import { useHistory } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { Formik, Form, FastField } from 'formik';
import * as yup from 'yup';

import { InputField } from '../../custom-field';

const RegisterForm = () => {
    const history = useHistory();
    const initialValues = {
        email: '',
        password: '',
        passwordConfirm: ''
    };
    const registerSchema = yup.object().shape({
        email: yup
            .string()
            .email('This field required an email!')
            .required('This field is required!'),
        password: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/,
                    'Minimum three characters. At least one letter, one number and one special character')
            .required('This field is required!'),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Password must match')
            .required('This field is required!')
    });
    const handleSubmit = values => {
        history.replace('/auth/login', values);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
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
                            label='Pasword'
                            color='success'
                        />
                        <FastField
                            name='passwordConfirm'
                            component={InputField}
                            type='password'
                            label='Password confirmation'
                            color='success'
                        />
                        <Button type='submit' variant='contained' color='error' sx={{ padding: '15px 0', backgroundColor: '#f76254' }}>
                            REGISTER
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;