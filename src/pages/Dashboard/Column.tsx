import styled from 'styled-components';

import Cart from './Cart';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface Props {
  tasks: Task[];
  title: string;
}

const Column = (props: Props) => {
  const { tasks, title } = props;
  return (
    <ColumnWrapper>
      <h1>{title}</h1>
      {tasks.map((task) => {
        return <Cart key={task.id} task={task} />;
      })}
    </ColumnWrapper>
  );
};

const ColumnWrapper = styled.div`
  padding: 10px;
  background-color: lightgray
`;

export default Column;
