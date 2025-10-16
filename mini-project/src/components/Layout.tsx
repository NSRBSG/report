import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center'>
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
