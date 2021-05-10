import styled from 'styled-components';

import { Task } from '../../interface';

import Cart from './Cart';

interface Props {
  title: string;
  filteredTasks: Task[];
}

const Column = (props: Props) => {
  const { title, filteredTasks } = props;
  return (
    <ColumnWrapper>
      <h1>{title}</h1>
      {filteredTasks.map((task) => {
        return <Cart key={task.id} task={task} />;
      })}
    </ColumnWrapper>
  );
};

const ColumnWrapper = styled.div`
  padding: 10px;
  background-color: lightgray;
`;

export default Column;
