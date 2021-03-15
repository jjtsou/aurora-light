import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import { StyledReputationVotes } from './ReputationVotes.styles';
import Typography from '../typography';
import { formatNumber } from '../../../utils';

const ReputationVotes = ({ positiveVotes, negativeVotes }) => {
  const formattedPositiveVal = formatNumber(positiveVotes, 'percent');
  const formattedNegativeVal = formatNumber(negativeVotes, 'percent');

  return (
    <StyledReputationVotes>
      <Typography color="strongGreen" fontSize={15} padding="7px">
        {formattedPositiveVal}
      </Typography>
      <SvgIcon color="disabled" component={ThumbsUpDownIcon} fontSize="large" />
      <Typography color="amaranth" fontSize={15} padding="7px">
        {formattedNegativeVal}
      </Typography>
    </StyledReputationVotes>
  );
};

ReputationVotes.propTypes = {
  positiveVotes: PropTypes.number.isRequired,
  negativeVotes: PropTypes.number.isRequired,
};

export default ReputationVotes;
