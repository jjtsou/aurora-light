import PropTypes from 'prop-types';
import { GithubStats, ReputationVotes } from '../../common';
import { StyledCoinCommunity } from './CoinCommunity.styles';

const CoinCommunity = ({ positiveVotes, negativeVotes, github }) => {
  const { url, statistics } = github;

  return (
    <StyledCoinCommunity>
      <GithubStats url={url} statistics={statistics} />
      <ReputationVotes
        positiveVotes={positiveVotes}
        negativeVotes={negativeVotes}
      />
    </StyledCoinCommunity>
  );
};

CoinCommunity.propTypes = {
  github: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ),
  positiveVotes: PropTypes.number,
  negativeVotes: PropTypes.number,
};

CoinCommunity.defaultProps = {
  github: {},
  positiveVotes: 0,
  negativeVotes: 0,
};

export default CoinCommunity;
