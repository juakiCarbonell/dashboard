import styled from 'styled-components';

import Column from './Column';

interface Props {}

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

const TODO_TASKS = TASKS.filter((task) => task.status === 'todo');
const PRGRESS_TASKS = TASKS.filter((task) => task.status === 'progress');
const DONE_TASKS = TASKS.filter((task) => task.status === 'done');

const Dashboard = (props: Props) => {
  return (
    <DashboardWrapper>
      <CalumnWrapper>
        <Column title="Todo" tasks={TODO_TASKS} />
      </CalumnWrapper>

      <CalumnWrapper>
        <Column title="Progress" tasks={PRGRESS_TASKS} />
      </CalumnWrapper>

      <CalumnWrapper>
        <Column title="Done" tasks={DONE_TASKS} />
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
/*
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

 const Dashboard = (props: RouteComponentProps) => {
    return (
        <div>
            Dashboard
        </div>
    )
}

export default withRouter(Dashboard)
 */
