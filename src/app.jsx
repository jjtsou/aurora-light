import { useState } from 'react';
import Typography from './components/typography';
import Context from './context';
import GlobalStyle from './GlobalStyle';
import StyledApp from './app.styles';
import { CoinHomePage } from './pages';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <Context.Provider value={{ page, setPage }}>
      <StyledApp>
        <GlobalStyle />
        <Typography tag="h3" fontSize={32} color="#505050">
          Cryptobook
        </Typography>
        <CoinHomePage />
      </StyledApp>
    </Context.Provider>
  );
};

export default App;
