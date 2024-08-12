import {Link} from 'react-router-dom';
function Nav() {
<nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/booking" className="nav-item">BookingPage</Link>
        <Link to="/bookingform" className="nav-item">BookingForm</Link>
        <Link to="/heading" className="nav-item">Heading</Link>
        <Link to="/footer" className="nav-item">Footer</Link>
        <Link to="/nav" className="nav-item">Nav</Link>
        <Link to="/confirmedbooking" className="nav-item">Confirmed Booking</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
}
export default Nav