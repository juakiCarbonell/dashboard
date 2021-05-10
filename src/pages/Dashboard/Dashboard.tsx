import styled from 'styled-components';
import { useContext } from 'react';

import Column from './Column';

import { AppContext } from '../../context/AppContext';

interface Props {}


const Dashboard = (props: Props) => {

  const { tasks } = useContext(AppContext);

  const TODO_TASKS = tasks.filter((task) => task.status === 'todo');
  const PRGRESS_TASKS = tasks.filter((task) => task.status === 'progress');
  const DONE_TASKS = tasks.filter((task) => task.status === 'done');

  return (
    <DashboardWrapper>
      <CalumnWrapper>
        <Column title="Todo" filteredTasks={TODO_TASKS} />
      </CalumnWrapper>

      <CalumnWrapper>
        <Column title="Progress" filteredTasks={PRGRESS_TASKS} />
      </CalumnWrapper>

      <CalumnWrapper>
        <Column title="Done" filteredTasks={DONE_TASKS} />
      </CalumnWrapper>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;
const CalumnWrapper = styled.div``;

export default Dashboard;
