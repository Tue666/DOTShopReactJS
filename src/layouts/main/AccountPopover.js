import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Divider, MenuItem, ListItemIcon } from '@mui/material';
import { AssignmentIndOutlined, AssignmentOutlined, SwitchAccountOutlined, LogoutOutlined } from '@mui/icons-material';

import { PATH_AUTH } from '../../routes/path';
import { removeUser } from '../../redux/slices/user';
import AvatarBadge from '../../components/AvatarBadge';
import MainPopover from '../../components/MainPopover';

const propTypes = {
    user: PropTypes.object
};

const MENU_OPTIONS = [
    {
        label: 'My Profile',
        icon: <AssignmentIndOutlined />,
        linkTo: '/profile'
    },
    {
        label: 'My Ordered',
        icon: <AssignmentOutlined />,
        linkTo: '/ordered'
    }
];

const AccountPopover = ({ user }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const anchorNotify = useRef(null);
    const [openedPopover, setOpenedPopover] = useState(false);

    const popoverEnter = () => {
        setOpenedPopover(true);
    };
    const popoverLeave = () => {
        setOpenedPopover(false);
    };

    const handleLogout = type => {
        dispatch(removeUser());
        type === 'switch' && history.replace(PATH_AUTH.login);
    };
    return (
        <>
            <Label
                ref={anchorNotify}
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
            >
                Welcome!, {user.name} &nbsp;
                <i className="fas fa-caret-down"></i>
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
                <Box
                    sx={{ width: '250px', display: 'flex', flexDirection: 'column', p: 2 }}
                >
                    <AvatarBadge
                        status='online'
                        width={70}
                        height={70}
                        sx={{ mb: 2, mx: 'auto' }}
                    />
                    {MENU_OPTIONS.map(menu => (
                        <MenuItem key={menu.label} sx={{ fontSize: '14px' }}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            {menu.label}
                        </MenuItem>
                    ))}
                    <Divider />
                    <MenuItem onClick={() => handleLogout('switch')} sx={{ fontSize: '14px' }}>
                        <ListItemIcon>
                            <SwitchAccountOutlined />
                        </ListItemIcon>
                        Switch account
                    </MenuItem>
                    <MenuItem onClick={() => handleLogout('out')} sx={{ fontSize: '14px' }}>
                        <ListItemIcon>
                            <LogoutOutlined />
                        </ListItemIcon>
                        Log out
                    </MenuItem>
                </Box>
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

AccountPopover.propTypes = propTypes;

export default AccountPopover;
