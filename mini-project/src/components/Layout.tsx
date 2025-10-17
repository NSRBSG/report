import { Outlet, Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <>
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex gap-4'>
            <Link to='/home' className='text-white'>
              Home
            </Link>
            {user && (
              <Link to='/calc' className='text-white'>
                Calculator
              </Link>
            )}
            {user && (
              <Link to='/about' className='text-white'>
                About
              </Link>
            )}
          </div>
          <div className='flex gap-4'>
            {!user ? (
              <>
                <Link to='/login' className='text-white'>
                  Login
                </Link>
                <Link to='/join' className='text-white'>
                  Join
                </Link>
              </>
            ) : (
              <button onClick={logout} className='text-white'>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      <div className='min-h-screen flex flex-col justify-center'>
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
