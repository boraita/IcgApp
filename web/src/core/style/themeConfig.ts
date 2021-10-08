import {createTheme} from '@material-ui/core/styles';

export const SetTheme = (value: boolean) => {
  const palletType = value ? 'dark' : 'light';
  return createTheme({
    palette: {
      type: palletType,
    },
  });
};
