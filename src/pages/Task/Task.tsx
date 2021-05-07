import styled from 'styled-components';

import { useParams } from 'react-router-dom';

const TASKS = [
  {
    id: 1,
    title: 'Test_1',
    description: 'This is a cool task',
    status: 'todo',
  },
  {
    id: 2,
    title: 'Test_2',
    description: 'This is a cool task',
    status: 'progress',
  },
  {
    id: 3,
    title: 'Test_3',
    description: 'This is a cool task',
    status: 'done',
  },
  {
    id: 4,
    title: 'Test_4',
    description: 'This is a cool task',
    status: 'todo',
  },
  {
    id: 5,
    title: 'Test_5',
    description: 'This is a cool task',
    status: 'progress',
  },
];

interface ParamTypes {
  id: string;
  title: string;
  description: string;
  status: string;
}

const Task = () => {
  const { id } = useParams<ParamTypes>();
  const idNumber = +id;
  console.log(id);
  const task = TASKS.find((task) => task.id === idNumber);
  if (!task) {
    return <h1>Error</h1>;
  }
  const { title, description } = task;
  return (
    <TaskWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </TaskWrapper>
  );
};

const TaskWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export default Task;
