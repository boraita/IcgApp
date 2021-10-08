import React from 'react'
import { OwnerDogList } from '../../components/OwnerDogList';
import { Route } from 'react-router-dom';

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
    )
}
