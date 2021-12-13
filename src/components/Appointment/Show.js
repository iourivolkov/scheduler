import React from 'react';

// allows a user to see an existing appointment

export default function Show(props) {

  return (
    <main className="appointment__card appointment__card--show">
  <section className="appointment__card-left">
    <h2 className="text--regular">Lydia Miller-Jones</h2>
    <section className="interviewer">
      <h4 className="text--light">Interviewer</h4>
      <h3 className="text--regular">Sylvia Palmer</h3>
    </section>
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <img
        className="appointment__actions-button"
        src="images/edit.png"
        alt="Edit"
        onEdit={props.onEdit}
      />
      <img
        className="appointment__actions-button"
        src="images/trash.png"
        alt="Delete"
      />
    </section>
  </section>
</main>

  )
}

// show component should accept the following props:
// student: str --> "Lydia miller-jones"
// interviewer --> {...} (obj) - use interview obj that already exists
// onEdit = f(x) --> call when user clicks on the Edit button
// onDelete = f(x) --> call when user clicks on the Delete button
