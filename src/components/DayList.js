import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {

  const day = props.days.map((dayElem) => {
    return <DayListItem
      key={dayElem.id}
      name={dayElem.name}
      spots={dayElem.spots}
      selected={dayElem.name === props.day}
      setDay={props.setDay}
      />
  });
  return (
    <ul>{day}</ul>
  );
}

// DayList takes in 3 props:
// days: [{...}, {...}, {...}] - each obj = day --> incl. id, name, spots
// day: string - currently selected day
// setDay: function - sets the currently selected day and accepts the name of the day 

// props = obj --> days = arr --> dayElem = obj in arr --> dayElem.id --> property in dayElem object
// dayElem obj contains info to populate one DayListItem component*