import { useParams } from 'react-router-dom';

const CoinDetailsPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default CoinDetailsPage;
