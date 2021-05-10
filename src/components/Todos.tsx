import React from 'react';

//React.FC is a Generic
const Todos:React.FC<{items: string[]}> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return (
                    <li key={item}>{item}</li>
                )
            })}
        </ul>
    )
}

export {Todos};

/*
//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
 */