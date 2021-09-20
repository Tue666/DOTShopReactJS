import { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Link, Stack } from '@mui/material';

import { PATH_AUTH } from '../../routes/path';
import MainPopover from '../../components/MainPopover';

const HeaderTop = () => {
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
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
            >
                <Stack direction='row' justifyContent='space-between'>
                    <>
                        <Label>
                            <i className="fas fa-mobile-alt"></i> Download app
                        </Label>
                    </>
                    <Linking component={RouterLink} to={{ pathname: 'https://www.facebook.com/exe.shiro' }} target='_blank'>
                        <i className="fab fa-facebook"></i> Connect
                    </Linking>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
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
                            <div style={{ backgroundColor: 'red', cursor: 'pointer' }}>Popover is showing</div>
                            <div>Popover is showing</div>
                        </MainPopover>
                    </>
                    <>
                        <Label>
                            <i className="fas fa-question-circle"></i> Support
                        </Label>
                    </>
                    <Linking
                        component={RouterLink}
                        to={PATH_AUTH.login}
                        sx={{ ml: '20px', borderRight: '1px solid #ccc' }}
                    >
                        Sign in
                    </Linking>
                    <Linking component={RouterLink} to={PATH_AUTH.register}>
                        Sign up
                    </Linking>
                </Stack>
            </Stack>
            <Label
                sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
            >
                <i className="fas fa-bars"></i>
            </Label>
        </>
    );
};

const Linking = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    padding: '0px 10px',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '15px',
    '&:hover': {
        color: '#f53d2d'
    }
}));

const Label = styled('span')({
    padding: '0px 10px',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '15px',
    cursor: 'pointer',
    '&:hover': {
        color: '#f53d2d'
    }
});

export default HeaderTop;
