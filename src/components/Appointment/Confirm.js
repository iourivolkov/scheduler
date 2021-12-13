import React from 'react';
import Button from 'components/Button';

// allows a user to confirm a destructive action

export default function Confirm(props) {

  return (
    <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">Delete the appointment?</h1>
  <section className="appointment__actions">
    <Button danger  onClick={props.onCancel}>Cancel</Button>
    <Button danger onClick={props.onConfirm}>Confirm</Button>
  </section>
</main>
  )
}

// confirm component should accept the following props;
// message: str --> e.g "delete the component"
// onConfirm = f(x) --> call when the user clicks the confirm button
// onCancel = f(x) --> call whe the user clicks the cancel button 