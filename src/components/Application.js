import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment";
import "components/Application.scss";
import axios from 'axios';
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];


export default function Application(props) {
// stores local state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {bookInterview},
    interviewers: {}
  });

  // function takes in day param and copies state object + updates day
  const setDay = day => setState({...state, day});
  // const setDays = days => setState(prev => ({...prev, days}))

function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: {...interview}
  };
  console.log(id, interview);
}

// pass this function to the Form component 
// Form should capture th ename and interviewer and pass them to props.onSave as args
// then create a new interview object to be passed to props.bookInterview
const save = (name, interviewer) => {

  props.bookInterview(props.id, interview)

 
  const interview = {
    student: name, 
    interviewer
  };

  // props.bookInterview(props.id, interview);
}



const appointments = getAppointmentsForDay(state, state.day);
// returns an object 
const interviewersForDay = getInterviewersForDay(state, state.day);
const schedule = Array.isArray(appointments) && appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        interviewers={interviewersForDay}
        bookInterview={bookInterview}
      />
    )
  })

  useEffect(() => {
    Promise.all([
     axios.get('http://localhost:8001/api/days'),
     axios.get('http://localhost:8001/api/appointments'),
     axios.get('http://localhost:8001/api/interviewers')

  ]).then((all) => {
    setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  });
}, []);


  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
  <DayList
    days={state.days}
    value={state.day}
    onChange={setDay}
  />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {schedule}
     <Appointment key="last" time="5pm" />
      </section>
      
    </main>
  );
}

// Appointment component accepts 3 props: 
// id 
// time
// interview 
