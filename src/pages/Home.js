import { Container } from '@mui/material';

import Teleport from '../components/Teleport';
import { combineLink } from '../components/ScrollToTop';
import { Banners, Categories } from '../components/home';
import { ViewCarousel, LocalFireDepartment, Category, ScreenSearchDesktop, Preview, Ballot } from '@mui/icons-material';
import ProductSection from '../components/ProductSection';
import ProductList from '../components/ProductList';

const actions = [
    { icon: combineLink('banners', <ViewCarousel />), name: 'Banners' },
    { icon: combineLink('hot-section', <LocalFireDepartment />), name: 'Hot selling products' },
    { icon: combineLink('categories', <Category />), name: 'Categories' },
    { icon: combineLink('search-section', <ScreenSearchDesktop />), name: 'Most searching products' },
    { icon: combineLink('view-section', <Preview />), name: 'Top view products' },
    { icon: combineLink('product-list', <Ballot />), name: 'Suggestions for you' },
];

const Home = () => (
    <Container>
        <Teleport actions={actions} />
        <Banners id='banners' />
        <ProductSection id='hot-section' title="Hot selling products" />
        <Categories id='categories' />
        <ProductSection id='search-section' title="Most searching products" />
        <ProductSection id='view-section' title="Top view products" />
        <ProductList id='product-list' />
    </Container>
);

export default Home;
