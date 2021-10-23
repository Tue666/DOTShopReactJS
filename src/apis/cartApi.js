import axiosInstance from './axiosInstance';

const cartApi = {
    // [GET] /carts
    getCart: () => {
        const url = '/carts';
        return axiosInstance.get(url);
    },

    // [PATCH] /carts/check/:cartId/:isCheckedAll
    toggleCheck: (cartId, isCheckedAll) => {
        const url = `/carts/check/${cartId}/${isCheckedAll}`;
        return axiosInstance.patch(url);
    },

    // [DELETE] /carts/:cartId
    removeCart: (cartId) => {
        const url = `/carts/${cartId}`;
        return axiosInstance.delete(url);
    }
};

export default cartApi;