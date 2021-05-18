import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

//React.FC is a Generic
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            clicked={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
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
