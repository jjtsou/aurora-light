import { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Context from './context';
import { theme, GlobalStyle } from './styles';
import { StyledApp, StyledLink } from './app.styles';
import { Typography } from './components/common';
import { CoinHomePage, CoinDetailsPage } from './pages';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <Context.Provider value={{ page, setPage }}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <GlobalStyle />
          <HashRouter>
            <StyledLink to="/">
              <Typography tag="h3" fontSize={32} color="matterhorn">
                Cryptobook
              </Typography>
            </StyledLink>
            <Route exact path="/" component={CoinHomePage} />
            <Route path="/details/:id" component={CoinDetailsPage} />
          </HashRouter>
        </StyledApp>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
