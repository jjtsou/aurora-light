import PropTypes from 'prop-types';
import { useCoinDetails } from '../../hooks';
import GithubStats from '../githubStats';
import CoinDescription from './CoinDescription';
import CoinMarkets from './CoinMarkets';

const CoinDetails = ({ id }) => {
  const { coinDetails } = useCoinDetails(id);
  const {
    markets,
    priceChange,
    coinDescription,
    image,
    name,
    github = {},
    links = {},
    reputationUpVotesPercentage,
    reputationDownVotesPercentage,
  } = coinDetails;

  const { forks, stars, subscribers, totalIssues } = github;
  const { githubUrl } = links;

  console.log('coinDetails', coinDetails);
  return (
    <>
      <GithubStats
        githubUrl={githubUrl}
        forks={forks}
        stars={stars}
        subscribers={subscribers}
        totalIssues={totalIssues}
      />
      <CoinDescription
        description={coinDescription}
        image={image}
        name={name}
      />
      <CoinMarkets markets={markets} priceChange={priceChange} />
    </>
  );
};

CoinDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinDetails;
