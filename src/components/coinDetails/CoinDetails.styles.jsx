import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

const StyledCoinDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

const CoinDetailsSkeleton = () => (
  <>
    <Skeleton width="80px" height="80px" variant="circle" />
    <Skeleton width="33vw" height="7vh" variant="text" />
    <Skeleton width="7vw" height="5vh" variant="rect" />
    <Skeleton width="50vw" height="35vh" variant="text" />
    <Skeleton width="90vw" height="20vh" variant="rect" />
    <Skeleton width="50vw" height="20vh" variant="rect" />
  </>
);

export { StyledCoinDetails, CoinDetailsSkeleton };
