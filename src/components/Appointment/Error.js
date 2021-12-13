import React from 'react';

export default function Error(props) {


  return (
    <main className="appointment__card appointment__card--error">
  <section className="appointment__error-message">
    <h1 className="text--semi-bold">Error</h1>
    <h3 className="text--light">Could not delete appointment</h3>
  </section>
  <img
    className="appointment__error-close"
    src="images/close.png"
    alt="Close"
    onClick={props.onClose}
  />
</main>
  )
}

// err component should accept the following props:
// message: str --> e.g 'could not delete apt'
// onClose: f(x) --> called when the user clicks the close button