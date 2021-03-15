import PropTypes from 'prop-types';
import { useCoinDetails } from '../../hooks';
import { StyledCoinDetails, CoinDetailsSkeleton } from './CoinDetails.styles';
import CoinDescription from './coinDescription';
import CoinMarkets from './coinMarkets';
import CoinCommunity from './coinCommunity';
import CoinContactInfo from './coinContactInfo';

const CoinDetails = ({ id }) => {
  const { coinDetails, isPending } = useCoinDetails(id);
  const {
    markets,
    priceChange,
    coinDescription,
    image,
    name,
    github,
    socialMedia,
    reputationUpVotesPercentage,
    reputationDownVotesPercentage,
  } = coinDetails;

  return (
    <StyledCoinDetails>
      {isPending ? (
        <CoinDetailsSkeleton />
      ) : (
        <>
          {image && <img src={image} alt={name} width="80px" height="80px" />}
          <CoinCommunity
            github={github}
            positiveVotes={reputationUpVotesPercentage}
            negativeVotes={reputationDownVotesPercentage}
          />
          <CoinDescription description={coinDescription} />
          <CoinContactInfo socialMedia={socialMedia} />
          <CoinMarkets markets={markets} priceChange={priceChange} />
        </>
      )}
    </StyledCoinDetails>
  );
};

CoinDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinDetails;
