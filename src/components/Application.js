import React from 'react';

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import "components/Application.scss";

import useApplicationData from "hooks/useApplicationData";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";



export default function Application(props) {

  // const setDay = (day) => setState({...state, day});
  // const setDays = (days) => setState(prev => ({...prev, days}));

  const {state, setDay, bookInterview, cancelInterview} = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day);
  const interviewersForDay = getInterviewersForDay(state, state.day);
 
  // Array.isArray(appointments) && 
  const schedule = appointments.map((appointment) => {
      const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        // interview={getInterview(state, appointment.interview)}
        interviewers={interviewersForDay}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
        
      />
    )
  });

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

