import React from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

import "./styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";



export default function Appointment(props) {
  const bookInterview = props.bookInterview;
  const cancelInterview = props.cancelInterview;

  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name, 
      interviewer
    };

    transition(SAVE)
    bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true));
    
  }
 
    
    function deleteInterview() {
      transition(DELETE, true);

    cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true));
  }


  return (
   <article className="appointment" >
     <Header time={props.time} />

     {mode === EMPTY && (
     <Empty onAdd={() => transition(CREATE)}
       />)}

     {mode === SHOW && (
     <Show
     id={props.id}
     student={props.interview.student}
     interviewer={props.interview.interviewer} 
     onDelete={() => transition(CONFIRM)}
     onEdit={() => transition(EDIT)}
     />
     )}

     {mode === CREATE && (
     <Form 
     interviewers={props.interviewers}
     onSave={save}
     onCancel={back}
     />

     )}
     {mode === CONFIRM && (
      <Confirm 
      message="Are you sure you want to delete this interview?"
      onConfirm={deleteInterview}
      onCancel={back}
      />
     )}

     {mode === SAVE && (
     <Status
     message={"Saving"} />
     )}

     {mode === DELETE && (
       <Status
       message={"Deleting"} />
     )}

     {mode === EDIT && (
       <Form
        name={props.interview.student}
        interviewers={props.interviewers}
        interviewer={props.interview.interviewer.id}
        onSave={save}
        onCancel={back}
       />
     )}

      {mode === ERROR_SAVE && (
        <Error
        message="An error occured when saving your appointment."
        onClose={back} 
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
        message="An error occured when deleting your appointment."
        onClose={back}
        />
      )}

   </article>
  )
}

