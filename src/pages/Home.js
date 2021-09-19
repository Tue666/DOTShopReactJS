import { Container } from '@mui/material';

import { Banners, Categories } from '../components/home';
import ProductSection from '../components/ProductSection';
import ProductList from '../components/ProductList';

const Home = () => (
    <Container>
        <Banners />
        <ProductSection title="Hot selling products" />
        <Categories />
        <ProductSection title="Most searching products" />
        <ProductSection title="Top view products" />
        <ProductList />
    </Container>
)

export default Home;
