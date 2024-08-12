import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes } from './Components/Main.js';
import { updateTimes } from './Components/Main.js';
import { validateDate, validateTime, validateGuests, validateOccasion } from '../../utils/validation';
import { fetchAPI } from './api.js';

jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});

test('renders the expected time', () => {
  const expectedTime = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  fetchAPI.mockReturnValue(expectedTime);

  // Call initializeTimes and check that it returns the expected times
  const times = initializeTimes();
  expect(times).toEqual(expectedTime);
});

test('should have required attribute on guests input', () => {
  render(<BookingForm />);
  const guestsInput = screen.getByRole('spinbutton', { name: /number of guests/i });
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('should have required attribute on date input', () => {
  render(<BookingForm />);
  const dateInput = screen.getByRole('textbox', { name: /date/i });
  expect(dateInput).toHaveAttribute('required');
});

test('should have required attribute on occasion select', () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByRole('combobox', { name: /occasion/i });
  expect(occasionSelect).toHaveAttribute('required');
});

test('should have required attribute on time input', () => {
  render(<BookingForm />);
  const timeSelect = screen.getByRole('combobox', { name: /choose time/i });
  expect(timeSelect).toHaveAttribute('required');
});

test('renders the same value that is provided in the state', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const selectedDate = new Date();
  const updatedTimes = updateTimes(currentState, selectedDate);
  expect(updatedTimes).toEqual(currentState);
});

test('validateDate should return true for valid date', () => {
  expect(validateDate('2024-08-15')).toBe(true);
});

test('validateDate should return false for invalid date', () => {
  expect(validateDate('invalid-date')).toBe(false);
});

test('validateTime should return true for valid time', () => {
  expect(validateTime('18:00')).toBe(true);
});

test('validateTime should return false for invalid time', () => {
  expect(validateTime('invalid-time')).toBe(false);
});

test('validateGuests should return true for valid guest number', () => {
  expect(validateGuests(5)).toBe(true);
});

test('validateGuests should return false for invalid guest number', () => {
  expect(validateGuests(15)).toBe(false);
});

test('validateOccasion should return true for valid occasion', () => {
  expect(validateOccasion('Birthday')).toBe(true);
});

test('validateOccasion should return false for invalid occasion', () => {
  expect(validateOccasion('Invalid Occasion')).toBe(false);
});