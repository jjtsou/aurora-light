import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { useCoinDetails } from '../../hooks';
import { StyledCoinDetails } from './CoinDetails.styles';
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
    links,
    socialMedia,
    reputationUpVotesPercentage,
    reputationDownVotesPercentage,
  } = coinDetails;

  return (
    <StyledCoinDetails>
      {isPending ? (
        <>
          <Skeleton width="80px" height="80px" variant="circle" />
          <Skeleton width="33vw" height="7vh" variant="text" />
          <Skeleton width="7vw" height="5vh" variant="rect" />
          <Skeleton width="50vw" height="35vh" variant="text" />
          <Skeleton width="90vw" height="20vh" variant="rect" />
          <Skeleton width="50vw" height="20vh" variant="rect" />
        </>
      ) : (
        <>
          {image && <img src={image} alt={name} width="80px" height="80px" />}
          <CoinCommunity
            links={links}
            statistics={github}
            positiveVotes={reputationUpVotesPercentage}
            negativeVotes={reputationDownVotesPercentage}
          />
          <CoinDescription description={coinDescription} />
          <CoinContactInfo links={links} socialMedia={socialMedia} />
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
