import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import { Box, Badge, IconButton } from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

import MainPopover from '../../components/MainPopover';

const propTypes = {
    type: PropTypes.string
};

const StorageProduct = ({ type }) => {
    const anchorNotify = useRef(null);
    const [openedPopover, setOpenedPopover] = useState(false);

    const popoverEnter = () => {
        setOpenedPopover(true);
    };

    const popoverLeave = () => {
        setOpenedPopover(false);
    };
    return (
        <Box>
            <RootStyle
                ref={anchorNotify}
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
            >
                <Badge
                    badgeContent={100}
                    max={99}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                >
                    {type === 'cart' ? (
                        <Link to='/cart'>
                            <IconButton sx={{ color: '#f76254' }}>
                                <ShoppingCart />
                            </IconButton>
                        </Link>
                    ) : (
                        <IconButton sx={{ color: '#f76254' }}>
                            <Favorite />
                        </IconButton>
                    )}
                </Badge>
            </RootStyle>
            <MainPopover
                open={openedPopover}
                anchorEl={anchorNotify.current}
                anchorVer="bottom"
                anchorHor="right"
                transformVer="top"
                transformHor="right"
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
            >
                <div style={{ backgroundColor: 'red', cursor: 'pointer' }}>Popover is showing</div>
                <div>Popover is showing</div>
            </MainPopover>
        </Box>
    );
};

const RootStyle = styled(Box)({
    margin: '0 5px',
    transition: '0.3s'
});

StorageProduct.propTypes = propTypes;

export default StorageProduct
