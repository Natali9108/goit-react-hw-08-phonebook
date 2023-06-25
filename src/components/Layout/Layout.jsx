import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components';
import { Loader } from 'components';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: '18px',
            },
          }}
        />
      </main>
    </>
  );
};
