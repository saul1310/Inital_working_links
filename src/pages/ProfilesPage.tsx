import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="spacer">
      hello!
 
    <Link to="/home"> this is a link
    </Link>
    </div>
  );
}
