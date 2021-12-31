import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {

  const day = props.days.map((dayElem) => {
    return <DayListItem
      key={dayElem.id}
      name={dayElem.name}
      spots={dayElem.spots}
      selected={dayElem.name === props.value}
      setDay={props.onChange}
      />
  });
  return (
    <ul>{day}</ul>
  );
}

