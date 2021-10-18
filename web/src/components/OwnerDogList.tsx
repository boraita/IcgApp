import { Button } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import api from 'core/service/api';
import { ApiResources } from 'core/service/ApiResources';
import { resolveApiPath } from 'core/service/resolvePath';
import { owner } from 'models/owner';
import React, { useState } from 'react';

export const OwnerDogList = () => {
  const [owners, setOwners] = useState([]);

  const handleClick = () => {
    const path = resolveApiPath(ApiResources.OWNERS);
    api.get(path).then((apiResponse: AxiosResponse) => setOwners(apiResponse?.data));
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick}>Get Owners</Button>
      {
        owners.map((owner: owner) => (<p key={owner.name}>{owner}</p>))
      }
    </>
  );
};
