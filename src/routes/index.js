import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/main';
import AuthLayout from '../layouts/authentication';
import Loading from '../pages/Loading';

const Router = () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Route path='/auth/:slugAuth'>
                <AuthLayout>
                    <Switch>
                        <Route path='/auth/login' component={Login} />
                        <Route path='/auth/register' component={Register} />
                    </Switch>
                </AuthLayout>
            </Route>
            <Route>
                <MainLayout>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/categories' component={Categories} />
                        <Route path='/detail/:slugName' component={Detail} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    </Suspense>
);

export default Router;

// Main
const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));
const Categories = lazy(() => import('../pages/Categories'));
const Detail = lazy(() => import('../pages/product/Detail'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Authentication
const Login = lazy(() => import('../pages/authentication/Login'));
const Register = lazy(() => import('../pages/authentication/Register'));