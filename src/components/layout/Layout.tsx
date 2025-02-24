import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import './Layout.styles.scss';

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
