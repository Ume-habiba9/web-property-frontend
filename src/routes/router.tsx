import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { AuthPage, SignOut } from 'auth';

import Layout from 'components/layout/layout';

import ErrorBoundary from 'routes/error-boundary';

import AboutUs from 'pages/about/about_us';
import Blogs from 'pages/blogs/blogs';
import ContactUs from 'pages/contact/contact-us';
import FindTheRightProperty from 'pages/find -right-property/find-right-property';
import Home from 'pages/home/home';
import Services from 'pages/services/services';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';

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
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/ftrp' element={<FindTheRightProperty />} />
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
