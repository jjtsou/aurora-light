import { useParams } from 'react-router-dom';
import StyledCoinDetailsPage from './CoinDetailsPage.styles';
import CoinDetails from '../../components/coinDetails';
import PriceChart from '../../components/priceChart';

const CoinDetailsPage = () => {
  const { id } = useParams();

  return (
    <StyledCoinDetailsPage>
      <CoinDetails id={id} />
      <PriceChart id={id} />
    </StyledCoinDetailsPage>
  );
};

export default CoinDetailsPage;
