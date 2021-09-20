import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/main';
import AuthLayout from '../layouts/authentication';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import Detail from '../pages/product/Detail';
import NotFound from '../pages/NotFound';

const Router = () => (
    <Switch>
        <Route path='/auth/:slugAuth'>
            <AuthLayout>
                <Switch>
                    <Route path='/auth/login' component={Login} ></Route>
                    <Route path='/auth/register' component={Register} ></Route>
                </Switch>
            </AuthLayout>
        </Route>
        <Route>
            <MainLayout>
                <Switch>
                    <Route path='/' exact component={Home} ></Route>
                    <Route path='/cart' component={Cart} ></Route>
                    <Route path='/categories' component={Categories} ></Route>
                    <Route path='/detail/:slugName' component={Detail} ></Route>
                    <Route path='*' component={NotFound}></Route>
                </Switch>
            </MainLayout>
        </Route>
    </Switch>
);

export default Router;
