import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
// import { Global, ThemeProvider } from '@emotion/react';
import { persistor, store } from './redux/store';
import { App } from 'components/App/App';
// import { GlobalStyles, theme, themeCharka } from './styles';
import { theme } from './styles';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          {/* <ThemeProvider theme={theme}> */}
          {/* <Global styles={GlobalStyles} /> */}
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
          {/* </ThemeProvider> */}
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
