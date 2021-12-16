import React from 'react';


export const getAppointmentsForDay = (state, day) => {
  const dayObject = state.days.find(element => element.name === day);
 
  if(!dayObject) {
    return [];
  }
  const appointmentIds = dayObject.appointments;

const appointmentsForDay = [];

for(const id in state.appointments) {
  if(appointmentIds.includes(Number(id))) {
    appointmentsForDay.push(state.appointments[id])
  }
}
return appointmentsForDay;
}


export const getInterviewersForDay = (state, day) => {
  const dayObject = state.days.find(element => element.name === day);

  if (!dayObject) {
    return [];
  }

  const interviewerIds = dayObject.interviewers;

  const interviewersForDay = [];

  for(const id in state.interviewers) {
    if(interviewerIds.includes(Number(id))) {
      interviewersForDay.push(state.interviewers[id])
    }
  }
  return interviewersForDay;
}



// function will return an object that contains the interview data if it is passed an object that contains an interviewer
// interview = obj that contains interviewer
export const getInterview = (state, interview) => {

  if(!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;

  for(const id in state.interviewers) {
    if(Number(id) === interviewerId) {
      
      return (
        {
          student: interview.student,
          interviewer: state.interviewers[id]
        }
      )
    }
  }
}



