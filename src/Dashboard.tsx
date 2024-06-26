import { Column, TimeCard } from '@hakit/components';
import { useHass } from '@hakit/core';
import { Canvas } from 'react-three-fiber';
import Room from './Room';

function Dashboard() {
  const { getAllEntities, } = useHass();
  return (
    <>
      <Room />

      <Column fullWidth fullHeight>
        <h2>Succesfully Authenticated!</h2>
        <p>The time below should be updating from home asisstant every minute</p>
        <TimeCard />
        <p>
          You have <b>{Object.keys(getAllEntities()).length}</b> entities to start automating with! Have fun!
        </p>


      </Column>


    </>

  );
}

export default Dashboard;
