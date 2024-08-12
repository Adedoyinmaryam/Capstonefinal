import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingPage from './BookingPage.js';

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  const random = seededRandom(date.getDate());
  const result = [];

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result;
};

const submitAPI = (formData) => {
  // You should implement the actual logic for submitting the form data here
  // For now, it just returns true
  return true;
};

function Main() {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer((state, action) => {
    if (action.type === 'UPDATE_TIMES') {
      return { availableTimes: fetchAPI(new Date(action.date)) };
    }
    return state;
  }, initialState);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmedbooking");
    }
  };

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  return (
    <div>
      <BookingPage
        availableTimes={state}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Main;
export { fetchAPI as initializeTimes };