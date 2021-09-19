import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import Title from '../Title';
import ToggleShowAll from '../ToggleShowAll';

const Categories = () => (
    <>
        <Title>Categories</Title>
        <ToggleShowAll>
            <RootStyle
                container
                justifyContent="center"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => (
                    <Grid item lg={2} sm={3} xs={6} key={item}>
                        <Category>
                            <Image src="https://doopage.com/assets/uploads/2019/05/dau-tu-hinh-anh-khi-ban-hang-tren-shopee.jpg" alt="" />
                            <Link to='/categories'>
                                <Name>Đồ chơi và thời trang Đồ chơi và thời trang Đồ chơi và thời trang</Name>
                            </Link>
                        </Category>
                    </Grid>
                ))}
            </RootStyle>
        </ToggleShowAll>
    </>
);

const RootStyle = styled(Grid)(({ theme }) => ({
    padding: '0 50px',
    marginBottom: '35px',
    maxHeight: '180px',
    overflowY: 'hidden',
    transition: 'all 0.5s',
    [theme.breakpoints.down('sm')]: {
        padding: 0
    }
}));

const Category = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    margin: '2px',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0,0,0,0.10)',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: '5px 3px 7px rgb(145 158 171 / 24%)',
    }
}));

const Image = styled('img')({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px'
});

const Name = styled('span')({
    fontWeight: 'bold',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&:hover': {
        color: '#f53d2d'
    }
});

export default Categories;
