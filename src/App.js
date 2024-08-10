import Homepage from "./Components/Homepage.js"
import CallToAction from './Components/CallToAction.js'
import Chicago from './Components/Chicago.js'
import BookingPage from './Components/Bookingform.js'
import Nav from './Components/Nav.js'
import Main from './Components/Main.js'
import CustomersSay from './Components/CustomersSay.js'
import Specials from './Components/Specials.js'
import {Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <nav className="App">
      <BookingPage />
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/booking" element={<Main />}/>
      <Route path="/callToAction" element={<CallToAction />}/>
      <Route path="/chicago" element={<Chicago />}/>
      <Route path="/customers-Say" element={<CustomersSay />}/>
      <Route path="/specials" element={<Specials />}/>
      <Route path="/nav" element={<Nav />}/>
      </Routes>
    </nav>
  );
}

export default App;
