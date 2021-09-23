import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import { StarRounded } from '@mui/icons-material';

import Title from '../Title';
import Stars from '../Stars';
import Comment from './Comment';

const Review = () => (
    <>
        <Title>Ratings - Reviews from customers</Title>
        <Stack direction={{ xs: 'column', md: 'row', lg: 'row' }} sx={{ mb: '20px' }}>
            <Stack sx={{ width: '335px' }}>
                <Stack direction='row' alignItems='center'>
                    <Typography variant='h3' sx={{ p: 2 }}>4.8</Typography>
                    <Stack justifyContent='center'>
                        <Stars total={5} rating={4} />
                        <Typography variant='body2'>69 ratings</Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stars total={5} rating={5} />
                        <Range total={69} votes={60} />
                        <Typography variant='body2'>60</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stars total={5} rating={4} />
                        <Range total={69} votes={5} />
                        <Typography variant='body2'>5</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stars total={5} rating={3} />
                        <Range total={69} votes={3} />
                        <Typography variant='body2'>3</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stars total={5} rating={2} />
                        <Range total={69} votes={1} />
                        <Typography variant='body2'>1</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stars total={5} rating={1} />
                        <Range total={69} votes={0} />
                        <Typography variant='body2'>0</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack>
                <Typography variant='subtitle1'>Filter reviews by</Typography>
                <Stack direction='row' alignItems='center'>
                    <Filter>Mới nhất</Filter>
                    <Filter>5 <StarRounded fontSize='small' color='warning' /></Filter>
                    <Filter>4 <StarRounded fontSize='small' color='warning' /></Filter>
                    <Filter>3 <StarRounded fontSize='small' color='warning' /></Filter>
                    <Filter>2 <StarRounded fontSize='small' color='warning' /></Filter>
                    <Filter>1 <StarRounded fontSize='small' color='warning' /></Filter>
                </Stack>
            </Stack>
        </Stack>
        <Stack>
            <Comment status="online" />
            <Comment status="offline" />
            <Comment status="online" />
        </Stack>
    </>
);

const Range = styled('div')(({ votes, total }) => ({
    width: '150px',
    height: '6px',
    backgroundColor: 'rgb(238, 238, 238)',
    position: 'relative',
    zIndex: 1,
    margin: '0px 6px',
    borderRadius: '99em',
    '&:before': {
        content: '""',
        width: `calc(100%*${votes}/${total})`,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgb(120, 120, 120)',
        borderRadius: '99em'
    }
}));

const Filter = styled('div')(({ theme }) => ({
    display: 'flex',
    fontSize: '14px',
    padding: '10px 17px',
    borderRadius: '20px',
    backgroundColor: theme.palette.background.default,
    margin: '0px 12px 12px 0px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f53d2d',
        color: '#fff',
        transition: '0.5s'
    }
}));

export default Review;
