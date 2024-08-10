import {Link} from 'react-router-dom';
function Nav() {
<nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/booking" className="nav-item">BookingPage</Link>
        <Link to="/callToAction" className="nav-item">CallToAction</Link>
        <Link to="/chicago" className="nav-item">Chicago</Link>
        <Link to="/customers-say" className="nav-item">CustomersSay</Link>
        <Link to="/nav" className="nav-item">Nav</Link>
        <Link to="/specials" className="nav-item">Specials</Link>
      </nav>
}
export default Nav