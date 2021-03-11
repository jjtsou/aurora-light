import { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Context from './context';
import GlobalStyle from './GlobalStyle';
import { StyledApp, StyledLink } from './app.styles';
import Typography from './components/typography';
import { CoinHomePage, CoinDetailsPage } from './pages';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <Context.Provider value={{ page, setPage }}>
      <StyledApp>
        <GlobalStyle />
        <HashRouter>
          <StyledLink to="/">
            <Typography tag="h3" fontSize={32} color="#505050">
              Cryptobook
            </Typography>
          </StyledLink>
          <Route exact path="/" component={CoinHomePage} />
          <Route path="/details/:id" component={CoinDetailsPage} />
        </HashRouter>
      </StyledApp>
    </Context.Provider>
  );
};

export default App;
