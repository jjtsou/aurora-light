import { useAppContext } from '../../hooks';
import StyledCoinHomePage from './CoinHomePage.styles';
import { Pagination } from '../../components/common';
import CoinList from '../../components/coinList';

const CoinHomePage = () => {
  const { page, setPage } = useAppContext();
  return (
    <StyledCoinHomePage>
      <CoinList page={page} />
      <Pagination count={10} page={page} setPage={setPage} />
    </StyledCoinHomePage>
  );
};

export default CoinHomePage;
