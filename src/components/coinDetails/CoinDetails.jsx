import PropTypes from 'prop-types';
import { useCoinDetails } from '../../hooks';
import { StyledCoinDetails } from './CoinDetails.styles';
import CoinDescription from './coinDescription';
import CoinMarkets from './coinMarkets';
import CoinCommunity from './coinCommunity';
import CoinContactInfo from './coinContactInfo';

const CoinDetails = ({ id }) => {
  const { coinDetails } = useCoinDetails(id);
  const {
    markets,
    priceChange,
    coinDescription,
    image,
    name,
    github,
    links,
    socialMedia,
    reputationUpVotesPercentage,
    reputationDownVotesPercentage,
  } = coinDetails;

  console.log('coinDetails', coinDetails);
  return (
    <StyledCoinDetails>
      {image && <img src={image} alt={name} width="80px" height="80px" />}
      <CoinCommunity
        links={links}
        statistics={github}
        positiveVotes={reputationUpVotesPercentage}
        negativeVotes={reputationDownVotesPercentage}
      />
      <CoinDescription description={coinDescription} />
      <CoinMarkets markets={markets} priceChange={priceChange} />
      <CoinContactInfo links={links} socialMedia={socialMedia} />
    </StyledCoinDetails>
  );
};

CoinDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinDetails;
