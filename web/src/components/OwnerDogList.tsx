import {Button} from '@material-ui/core';
import {AxiosResponse} from 'axios';
import React, {useState} from 'react';
import api from '../core/service/api';
import {ApiResources} from '../core/service/ApiResources';
import {resolveApiPath} from '../core/service/resolvePath';

export const OwnerDogList = () => {
  const [owners, setOwners] = useState([]);

  const handleClick = () => {
    const path = resolveApiPath(ApiResources.OWNERS);
    api.get(path).then((apiResponse: AxiosResponse) =>setOwners(apiResponse?.data));
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick}>Get Owners</Button>
      {
        owners.map((owner) => (<p key={owner.name}>{owner}</p>))
      }
    </>
  );
};
