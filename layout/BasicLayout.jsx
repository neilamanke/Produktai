import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Navigation } from '../components/Navigation.jsx';
import './GeneralLayout.css'

export function BasicLayout() {
  return (
    <>
      <Navigation />
      <main className='General-container'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
