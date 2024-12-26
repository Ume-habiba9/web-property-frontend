import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { AuthPage, SignOut } from 'auth';

import Layout from 'components/layout/layout';

import ErrorBoundary from 'routes/error-boundary';

import AboutUs from 'pages/about/about_us';
import Home from 'pages/home/home';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';
import Blogs from 'pages/blogs/blogs';
import Services from 'pages/services/services';
import SellWithUs from 'pages/selling/sell-with-us';

function AppRoutes() {
  // const { currentUser } = useAuth();
  const currentUser = true;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/service' element={<Services />} />
        <Route path='/sell-with-us' element={<SellWithUs />} />
        <Route path='logout' element={<SignOut />} />

        {currentUser ? (
          <>
            <Route path='/*' element={<PrivateRoutes />} />
            <Route path='auth/*' element={<Navigate to='/' />} />
          </>
        ) : (
          <>
            <Route path='auth/*' element={<AuthPage />} />
            <Route path='*' element={<Navigate to='/auth' />} />
          </>
        )}

        {/* Unknown path redirect */}
        <Route path='*' element={<Navigate to='/home' />} />
      </Route>
    )
  );

  return (
    <WithSuspense>
      <RouterProvider router={router} />
    </WithSuspense>
  );
}

export default AppRoutes;
