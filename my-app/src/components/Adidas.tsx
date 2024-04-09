import React, { ReactNode } from 'react';

type TasksTypes = {
  id: number
  title: string
  isDone: boolean
}

type AdidasPropsType = {
  tasks: TasksTypes[]
  children?: ReactNode
}

const Adidas: React.FC<AdidasPropsType> = (props) => {
  const { tasks, children } = props;

  return (
    <div>
      <ul>
        {tasks && tasks.map((t: TasksTypes)  => (
          <li key={ t.id }>
            <span>{t.id}. </span>
            <span>{t.title}</span>
            <input type="checkbox" checked={t.isDone} />
          </li>
          ))}
    </ul>
    { children }
    <hr />
    </div >
  );
};

export default Adidas;