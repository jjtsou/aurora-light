import ReactDom from 'react-dom';
import GlobalStyle from './GlobalStyle';
import StyledApp from './app.styles';
import Title from './components/typography/Typography';

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <Title tag="h2" fontSize={32}>
      Cryptobook
    </Title>
  </StyledApp>
);

ReactDom.render(<App />, document.getElementById('root'));
