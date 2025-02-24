import { Link } from 'react-router-dom';
import './Sidebar.styles.scss';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/sales">Ventas</Link>
        </li>
        <li>
          <Link to="/inventory">Inventario</Link>
        </li>
        <li>
          <Link to="/reports">Reportes</Link>
        </li>
      </ul>
    </aside>
  );
}
