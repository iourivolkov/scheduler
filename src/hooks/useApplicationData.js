import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = (day) => {
    setState(state => ({...state, day}))
  }



  useEffect(() => {
    Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
    axios.get('/api/interviewers')

  ]).then((all) => {
    setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  });
  }, []);

  useEffect(() => {
    axios.get("/api/days").then(days => setState(state => ({...state, days: days.data})));
  }, [state.appointments])



  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    }
  
    const appointments = {
      ...state.appointments, 
      [id]: appointment
    }
  
    return axios.put(`/api/appointments/${id}`, {interview})
      .then(response => setState(state => ({...state, appointments})));
  }



  const cancelInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
  
    const newState = {
      ...state, 
      appointments
    }
  
    return axios.delete(`/api/appointments/${id}`, {interview})
      .then(() => setState(newState));
  }

  
  return {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  }



}