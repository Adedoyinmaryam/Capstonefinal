import { render, screen } from '@testing-library/react';
import Bookingform from './Components/Bookingform';
import { initializeTimes } from './Components/Main.js'
import { updateTimes } from './Components/Main.js';

test('renders the BookingForm heading', () => {
  render(<Bookingform />);
  const headingElement = screen.getByText("Bookingform");
  expect(headingElement).toBeInTheDocument();
});

test('renders the expected time', () => {
  const expectedtime = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
   const time = initializeTimes();
   expect(time).toEqual(expectedtime);
})

test('renders the same value that is provided in the state', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const updatedTimes = updateTimes(currentState);
  expect(updatedTimes).toEqual(currentState);
});