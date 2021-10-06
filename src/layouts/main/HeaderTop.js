import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Link, Stack } from '@mui/material';

import { PATH_AUTH } from '../../routes/path';
import AccountPopover from './AccountPopover';
import NotifycationPopover from './NotifycationPopover';

const HeaderTop = () => {
    const { user } = useSelector(state => state.user);
    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
            >
                <Stack direction='row' justifyContent='space-between'>
                    <Label>
                        <i className="fas fa-mobile-alt"></i> Download app
                    </Label>
                    <Linking component={RouterLink} to={{ pathname: 'https://www.facebook.com/exe.shiro' }} target='_blank'>
                        <i className="fab fa-facebook"></i> Connect
                    </Linking>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                    <NotifycationPopover user={user} />
                    <Label>
                        <i className="fas fa-question-circle"></i> Support
                    </Label>
                    {Object.keys(user).length !== 0 ? (
                        <AccountPopover user={user} />
                    ) : (
                        <>
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
                        </>
                    )}
                </Stack>
            </Stack >
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
    fontWeight: '500',
    transition: '0.3s',
    fontSize: '15px',
    '&:hover': {
        color: '#f53d2d'
    }
}));

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

export default HeaderTop;
