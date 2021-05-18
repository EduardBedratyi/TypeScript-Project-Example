import React from 'react';
import { Todo } from '../components/models/todo';
import { TodoItem } from './TodoItem';
import classes from './Todos.module.css'

//React.FC is a Generic
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => {
        return <TodoItem key={item.id} text={item.text} />;
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
