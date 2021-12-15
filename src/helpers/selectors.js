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



