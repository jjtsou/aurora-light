import PropTypes from 'prop-types';
import { GithubStats, ReputationVotes } from '../../common';
import { StyledCoinCommunity } from './CoinCommunity.styles';

const CoinCommunity = ({ positiveVotes, negativeVotes, links, statistics }) => {
  const { githubUrl } = links;
  return (
    <StyledCoinCommunity>
      <GithubStats githubUrl={githubUrl} statistics={statistics} />
      <ReputationVotes
        positiveVotes={positiveVotes}
        negativeVotes={negativeVotes}
      />
    </StyledCoinCommunity>
  );
};

CoinCommunity.propTypes = {
  links: PropTypes.objectOf(PropTypes.string),
  statistics: PropTypes.arrayOf(PropTypes.object),
  positiveVotes: PropTypes.number,
  negativeVotes: PropTypes.number,
};

CoinCommunity.defaultProps = {
  links: {},
  statistics: [],
  positiveVotes: 0,
  negativeVotes: 0,
};

export default CoinCommunity;
