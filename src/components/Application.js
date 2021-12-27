// import React, { useState, useEffect } from "react";

import React from 'react';

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import "components/Application.scss";
// import axios from 'axios';
import useApplicationData from "hooks/useApplicationData";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";



export default function Application(props) {

  // const setDay = (day) => setState({...state, day});
  // const setDays = (days) => setState(prev => ({...prev, days}));

  const {state, setDay, bookInterview, cancelInterview} = useApplicationData();



  // stores local state


  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // });


// function uses appointment id to find the right appointments slot and set it's interview data to


//   const cancelInterview = (id, interview) => {
//   const appointment = {
//     ...state.appointments[id],
//     interview: null
//   }
  
//   const appointments = {
//     ...state.appointments,
//     [id]: appointment
//   }

//   const newState = {
//     ...state, 
//     appointments
//   }

//   return axios.delete(`/api/appointments/${id}`, {interview})
//     .then(() => setState(newState));
// }

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

  // useEffect(() => {
  //   Promise.all([
  //   axios.get('/api/days'),
  //   axios.get('/api/appointments'),
  //   axios.get('/api/interviewers')

  // ]).then((all) => {
  //   setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  // });
  // }, []);

  
  // bookInterview updates state

//   function bookInterview(id, interview) {
//   const appointment = {
//     ...state.appointments[id],
//     interview: {...interview}
//   }

//   const appointments = {
//     ...state.appointments, 
//     [id]: appointment
//   }

//   return axios.put(`/api/appointments/${id}`, {interview})
//     .then(response => setState(state => ({...state, appointments})));
// }



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

