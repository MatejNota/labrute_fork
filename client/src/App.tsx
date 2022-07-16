import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader';
import { AuthProvider } from './hooks/useAuth';
import { ConfirmProvider } from './hooks/useConfirm';
import { useLanguage } from './hooks/useLanguage';
import routes from './routes';
import light from './theme/light';

/**
 * App entry point
 * @returns {React.ReactElement}
 */
const App = () => {
  const routing = useRoutes(routes);
  const Language = useLanguage();

  console.log(light.palette.success);

  return (
    <HelmetProvider>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={light}>
            <LocalizationProvider dateAdapter={AdapterMoment} locale={Language.language}>
              <ConfirmProvider>
                <Suspense fallback={<Loader />}>
                  {routing}
                </Suspense>
              </ConfirmProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
