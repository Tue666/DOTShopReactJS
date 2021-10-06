import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Link, Stack, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Formik, Form, FastField } from 'formik';

import { PATH_PAGE } from '../../../routes/path'; 
import { startLoading, hasError, getUser } from '../../../redux/slices/user';
import { loginSchema } from '../../../utils/yupSchema';
import { InputField } from '../../custom-field';
import accountApi from '../../../apis/accountApi';

const LoginForm = () => {
    const [status, setStatus] = useState('error');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        const { state } = history.location;
        if (state) {
            setStatus(state.status);
            setMessage(state.message);
        }
    }, [history.location]);
    const initalValues = {
        email: '',
        password: ''
    };
    const handleSubmit = async values => {
        dispatch(startLoading());
        try {
            const res = await accountApi.login(values.email, values.password);
            if (res.status === 'error') {
                setStatus(res.status);
                setMessage(res.message);
            } else {
                // console.log(res.user, res.accessToken);
                dispatch(getUser(res.user));
                history.replace(PATH_PAGE.home, values);
            }
        } catch (error) {
            dispatch(hasError(error));
        }
    };
    return (
        <Formik
            initialValues={initalValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
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
                        {(status && message) && (
                            <Typography
                                variant='subtitle1'
                                sx={{ textAlign: 'center', color: status === 'success' ? '#38c771' : '#f76254', fontWeight: 'bold' }}
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
                            LOGIN
                        </LoadingButton>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
