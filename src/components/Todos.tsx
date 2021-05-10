import React from 'react';
import { Todo } from '../components/models/todo';

//React.FC is a Generic
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export { Todos };

/*
//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
 */
