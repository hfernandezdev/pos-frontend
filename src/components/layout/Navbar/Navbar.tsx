import { Link } from 'react-router-dom';
import './Navbar.styles.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          POS System
        </Link>
        <ul className="navbar-nav">
          <li>
            <Link to="/sales">Ventas</Link>
          </li>
          <li>
            <Link to="/inventory">Inventario</Link>
          </li>
          <li>
            <Link to="/reports">Reportes</Link>
          </li>
          <li>
            <Link to="/login">Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
