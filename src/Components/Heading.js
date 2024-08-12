import React from 'react';
import { Link } from 'react-router-dom';
import Chef from './icons_assets/Mario and Adrian A.jpg';

function Heading() {
  return (
    <header>
      <section className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/bookingform">Reservation</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="Title">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant,
            <br />
            focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/bookingform">
            <button className="btn" aria-label="On Click">
              Reserve Table
            </button>
          </Link>
          <img src={Chef} alt="Chef" className="image" />
        </div>
      </section>
    </header>
  );
}

export default Heading;
