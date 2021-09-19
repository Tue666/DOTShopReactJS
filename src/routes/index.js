import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/main';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Login from '../pages/authentication/Login';
import Detail from '../pages/product/Detail';

const Router = () => (
    <Switch>
        <Route path='/auth' component={Login}></Route>
        <Route>
            <MainLayout>
                <Switch>
                    <Route path='/' exact component={Home} ></Route>
                    <Route path='/cart' component={Cart} ></Route>
                    <Route path='/categories' component={Categories} ></Route>
                    <Route path='/detail/:slug' component={Detail} ></Route>
                </Switch>
            </MainLayout>
        </Route>
    </Switch>
);

export default Router;
