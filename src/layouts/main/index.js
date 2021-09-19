import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

const MainLayout = ({ children }) => (
    <>
        <MainHeader />
            {children}
        <MainFooter />
    </>
);

export default MainLayout;
