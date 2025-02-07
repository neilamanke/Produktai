import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Navigation } from '../components/Navigation.jsx';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import './GeneralLayout.css'

export function AdminLayout() {
  const ctx = useContext(UserContext);

  return (
    <>
      <Navigation />
      <main className='General-container'>
        {ctx.user.user_role === 'admin' ? <Outlet /> : <h1>Only logged user can see this page</h1>}
      </main>
      <Footer />
    </>
  );
}
