import React from 'react';
import {Route} from 'react-router-dom';
import {OwnerDogList} from '../../components/OwnerDogList';

export const Routes = () => {
  return (
    <>
      <Route path="/">
        <h1>Welcome React ICG App!!!!</h1>
      </Route>
      <Route path="/poldo">
        <OwnerDogList />
      </Route>
    </>
  );
};
