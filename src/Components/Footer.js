import logo from './icons_assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <div>
        <h4>Contact Us</h4>
        <address>123 Main St, Anytown, USA 12345</address>
        <p>Phone: 555-555-5555</p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <h3>Contact Links</h3>
      <nav>
        <ul>
          <li><a href='/'>X</a></li>
          <li><a href='/'>Facebook</a></li>
          <li><a href='/'>Instagram</a></li>
          <li><a href='/'>Youtube</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;