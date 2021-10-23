import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Checkbox, Typography, IconButton, Alert } from '@mui/material';
import { DeleteForeverOutlined, Favorite, Check } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { CART_WIDTH } from '../../constant';
import { HEADER_HEIGHT } from '../../constant';
import { toggleCheck, removeCart } from '../../redux/slices/cart';
import CartItem from './CartItem';
import Image from '../Image';
import Modal from '../Modal';

const propTypes = {
    totalItem: PropTypes.number,
    cart: PropTypes.array
};

const CartList = ({ totalItem, cart }) => {
    const [modal, setModal] = useState({
        openModal: false,
        _id: null
    });
    const dispatch = useDispatch();
    const isCheckedAll = cart.filter(item => !item.checked).length === 0;
    const totalPrice = cart.reduce((sum, item) => {
        if (item.checked) {
            return sum + (item.amount * (item.price - (item.price * item.discount / 100)));
        }
        return sum;
    }, 0);
    const handleChange = (_id, e) => {
        dispatch(toggleCheck({
            cartId: _id,
            isCheckedAll: e.target.checked
        }));
    };
    const handleRemove = () => {
        const { _id } = modal;
        dispatch(removeCart(_id));
        setModal({
            openModal: false,
            _id: null
        });
    };
    const handleOpenModal = _id => {
        setModal({
            openModal: true,
            _id
        });
    };
    const handleCloseModal = () => {
        setModal({
            openModal: false,
            _id: null
        });
    };
    console.log(modal);
    return (
        <RootStyle>
            <Heading>
                <Stack>
                    <Stack direction='row' alignItems='center' sx={{ pr: '5px' }}>
                        <Stack className="cart-col-1" direction='row' alignItems='center'>
                            <Checkbox
                                size='small'
                                checked={isCheckedAll}
                                checkedIcon={<Favorite />}
                                onChange={e => handleChange(null, e)}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                            />
                            <Typography variant='subtitle2'>All ({totalItem} products)</Typography>
                        </Stack>
                        <Typography className='cart-col-2' variant='subtitle2'>Single</Typography>
                        <Typography className='cart-col-3' variant='subtitle2'>Quantity</Typography>
                        <Typography className='cart-col-4' variant='subtitle2'>Price</Typography>
                        <IconButton className='cart-col-5' color='error' onClick={() => handleOpenModal(null)}>
                            <DeleteForeverOutlined />
                        </IconButton>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <ProgessBar achieved={(totalPrice * 100 / 100000000 <= 100 ? totalPrice * 100 / 100000000 : 100)}>
                            <Marked position='first'>
                                <Text location='bottom'>Buy</Text>
                            </Marked>
                            <Marked position='end' achieved={(totalPrice >= 50000000).toString()}>
                                {totalPrice >= 50000000 && <Check color='success' sx={{ fontSize: '14px' }} />}
                                <Text location='top'>-30K</Text>
                                <Text location='bottom'>50M</Text>
                            </Marked>
                            <Marked position='end' achieved={(totalPrice >= 100000000).toString()}>
                                {totalPrice >= 100000000 && <Check color='success' sx={{ fontSize: '14px' }} />}
                                <Text location='top'>-50K</Text>
                                <Text location='bottom'>100M</Text>
                            </Marked>
                        </ProgessBar>
                        <Image
                            alt=''
                            src='https://salt.tikicdn.com/ts/upload/77/9a/0d/601353ce6c8255e009706cdae74d01de.png'
                            sx={{ width: '76px', height: '24px' }}
                        />
                    </Stack>
                </Stack>
            </Heading>
            <Content>
                {cart && cart.map(item => (
                    <CartItem
                        key={item._id}
                        item={item}
                        onOpenModal={handleOpenModal}
                        onChange={handleChange}
                    />
                ))}
                {!cart && 'Loading...'}
            </Content>
            <Modal
                open={modal.openModal}
                title='Are you sure you wanna remove this product?'
                content={<Alert severity="error">The product will be permanently removed from the cart!</Alert>}
                onCloseModal={handleCloseModal}
                onSubmit={handleRemove}
            />
        </RootStyle>
    )
};

const RootStyle = styled('div')({
    width: CART_WIDTH
});

const Heading = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    position: 'sticky',
    top: `calc(${HEADER_HEIGHT} + 10px)`,
    padding: '5px 0',
    margin: '10px 0',
    zIndex: 99,
    '&:before, &:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '10px',
        backgroundColor: theme.palette.background.default,
    },
    '&:before': {
        top: '-10px'
    },
    '&:after': {
        bottom: '-10px'
    }
}));

const Content = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    paddingRight: '5px'
}));

const ProgessBar = styled('div')(({ theme, achieved }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: `calc(${CART_WIDTH} - 150px)`,
    margin: '17px 20px',
    '&:before': {
        content: '""',
        position: 'absolute',
        backgroundColor: theme.palette.background.default,
        borderRadius: '100px',
        width: `calc(${CART_WIDTH} - 150px)`,
        height: '6px',
        transform: 'translateY(-50%)',
        top: '50%',
        zIndex: 0
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        background: 'linear-gradient(90deg,rgb(0, 173, 87) 0%, rgb(119, 218, 144) 105.65%)',
        borderRadius: '100px',
        width: `${achieved}%`,
        height: '6px',
        transform: 'translateY(-50%)',
        top: '50%',
        zIndex: 1,
        transition: 'width 0.5s ease-in 0s'
    }
}));

const Marked = styled('div')(({ theme, position, achieved }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: `${position === 'first' ? 'rgba(0,0,0,0)' : achieved === 'true' ? 'rgb(214, 250, 223)' : theme.palette.background.paper}`,
    border: `${position !== 'first' ? '1px solid rgb(221, 221, 227)' : 'none'}`
}));

const Text = styled('div')(({ theme, location }) => ({
    position: 'absolute',
    top: `${location === 'top' ? '-16px' : '16px'}`,
    fontSize: '11px',
    color: theme.palette.text.primary,
    fontWeight: '500'
}));

CartList.propTypes = propTypes;

export default CartList;
