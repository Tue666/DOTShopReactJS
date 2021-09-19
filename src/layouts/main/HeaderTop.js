import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

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
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
            >
                <Grid item>
                    <Label><i className="fas fa-mobile-alt"></i> Download app</Label>
                    <Label><i className="fab fa-facebook"></i> Connect</Label>
                </Grid>
                <Grid item>
                    <Box style={{ display: 'inline-block' }}>
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
                    </Box>

                    <Label><i className="fas fa-question-circle"></i> Support</Label>
                    <Link to='/auth'>
                        <Label>Sign in/ Sign up</Label>
                    </Link>
                </Grid>
            </Grid>
            <Label
                sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
            >
                <i className="fas fa-bars"></i>
            </Label>
        </Box>
    );
}

const Label = styled('span')({
    padding: '0px 10px',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '15px',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
        color: '#f53d2d'
    }
});

export default HeaderTop;
