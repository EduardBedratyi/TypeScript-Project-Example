import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; clicked: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.clicked}>
      {props.text}
    </li>
  );
};

export { TodoItem };
