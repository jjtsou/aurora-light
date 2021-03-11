import { useParams } from 'react-router-dom';
import CoinDetails from '../../components/coinDetails';
import PriceChart from '../../components/priceChart';

const CoinDetailsPage = () => {
  const { id } = useParams();

  return (
    <>
      <CoinDetails id={id} />
      <PriceChart id={id} />
    </>
  );
};

export default CoinDetailsPage;
