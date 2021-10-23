import Cookies from 'js-cookie';
import axiosInstance from '../apis/axiosInstance';

const getToken = () => {
    return Cookies.get('accessToken');
};

const setToken = accessToken => {
    if (accessToken) {
        Cookies.set('accessToken', accessToken);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    } else {
        Cookies.remove('accessToken');
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

const isValidToken = async accessToken => {
    if (!accessToken) return false;
    return await axiosInstance.get('/accounts/verify');
};

export { getToken, setToken, isValidToken };
