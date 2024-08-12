import BookingForm from './Components/Bookingform.js';
import Nav from './Components/Nav.js';
import Footer from "./Components/Footer.js";
import Main from './Components/Main.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login.js'
import HomePage from './Components/HomePage.js';
import Heading from "./Components/Heading.js";
import Menu from './Components/Menu.js';
import BookingPage from './Components/BookingPage.js';
import ConfirmedBooking from './Components/ConfirmedBooking.js';

function App() {
  return (
      <>
      <BrowserRouter>
      <Heading />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/booking' element={<BookingForm />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bookingform' element={<BookingPage />} />
        <Route path='/confirmedbooking' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;