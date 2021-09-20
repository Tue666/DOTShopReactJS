import { Container, Breadcrumbs, Link, Typography, Stack } from '@mui/material';

import Teleport from '../components/Teleport';
import { FilterCategory, ResultContent } from '../components/categories';

const Categories = () => (
    <Container className='wide-container'>
        <Teleport />
        <Breadcrumbs separator='›' sx={{ pb: '5px' }}>
            <Link underline='none' fontSize='15px' color='inherit' href='/'>
                Trang chủ
            </Link>
            <Typography fontSize='15px' color='text.primary'>
                Thiết bị điện tử, phụ kiện
            </Typography>
        </Breadcrumbs>
        <Stack direction={{ xs: 'column', sm: 'row', lg: 'row' }} justifyContent='space-between'>
            <FilterCategory />
            <ResultContent />
        </Stack>
    </Container>
);

export default Categories;
