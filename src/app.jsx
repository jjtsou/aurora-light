import GlobalStyle from './GlobalStyle';
import StyledApp from './app.styles';
import Title from './components/typography';
import Coins from './components/coins';
import Pagination from './components/pagination';

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <Title tag="h2" fontSize={32}>
      Cryptobook
    </Title>
    <Coins />
    <Pagination items={[1, 2, 3, 4, 5, 6, 7, 8]} />
  </StyledApp>
);

export default App;
