import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Formik, Form, FastField } from 'formik';

import { registerSchema } from '../../../utils/yupSchema';
import { InputField } from '../../custom-field';
import accountApi from '../../../apis/accountApi';

const propTypes = {
    PATH_AUTH: PropTypes.object
};

const RegisterForm = ({ PATH_AUTH }) => {
    const [message, setMessage] = useState('');
    const history = useHistory();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };
    const handleSubmit = async values => {
        try {
            const res = await accountApi.register(values.name, values.email, values.password, values.passwordConfirm);
            if (res.status === 'error') {
                setMessage(res.message);
            } else {
                history.replace(PATH_AUTH.login, res);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Stack spacing={3}>
                        <FastField
                            name='name'
                            component={InputField}
                            type='text'
                            label='Your name'
                            color='success'
                        />
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
                        {message && (
                            <Typography
                                variant='subtitle1'
                                sx={{ textAlign: 'center', color: '#f76254', fontWeight: 'bold' }}
                            >
                                {message}
                            </Typography>
                        )}
                        <LoadingButton
                            loading={isSubmitting}
                            type='submit'
                            variant='contained'
                            color='error'
                            sx={{ padding: '15px 0', backgroundColor: '#f76254' }}
                        >
                            REGISTER
                        </LoadingButton>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

RegisterForm.propTypes = propTypes;

export default RegisterForm;
