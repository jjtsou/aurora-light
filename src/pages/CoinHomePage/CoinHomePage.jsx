import { useAppContext } from '../../hooks';
import StyledCoinHomePage from './CoinHomePage.styles';
import { Pagination } from '../../components/common';
import Coins from '../../components/coins';

const CoinHomePage = () => {
  const { page, setPage } = useAppContext();
  return (
    <StyledCoinHomePage>
      <Coins page={page} />
      <Pagination count={10} page={page} setPage={setPage} />
    </StyledCoinHomePage>
  );
};

export default CoinHomePage;
