// Summary: This will just tell you the payment is now complete for the trip, a lot of artistic liberties here.
// States Passed Down From App: Name of the Trip & Usernames
import React from 'react';
import Header from './Header';

const Confirmation = props => {
  return (
    <div>
      <Header />
      <text>Here are Confirmations</text>
    </div>
  );
};

export default Confirmation