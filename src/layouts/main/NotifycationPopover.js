import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';

import MainPopover from '../../components/MainPopover';

const propTypes = {
    user: PropTypes.object
};

const NotifycationPopover = ({ user }) => {
    const anchorNotify = useRef(null);
    const [openedPopover, setOpenedPopover] = useState(false);
    const popoverEnter = () => {
        setOpenedPopover(true);
    };
    const popoverLeave = () => {
        setOpenedPopover(false);
    };
    return (
        <>
            <Label
                ref={anchorNotify}
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
            >
                <i className="fas fa-bell"></i> Notification
            </Label>
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
                {Object.keys(user).length !== 0 ? (
                    <>
                        <div style={{ backgroundColor: 'red', cursor: 'pointer' }}>Popover is showing</div>
                        <div>Popover is showing</div>
                    </>
                ) : (
                    <h6>Chưa đăng nhập</h6>
                )}
            </MainPopover>
        </>
    );
};

const Label = styled('span')({
    padding: '0px 10px',
    fontWeight: '500',
    transition: '0.3s',
    fontSize: '15px',
    cursor: 'pointer',
    '&:hover': {
        color: '#f53d2d'
    }
});

NotifycationPopover.propTypes = propTypes;

export default NotifycationPopover;
