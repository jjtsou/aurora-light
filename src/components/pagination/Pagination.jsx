import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

const PaginationWrapper = ({ count, page, setPage }) => {
  if (!count) return null;
  const handleChange = (_, value) => setPage(value);

  return <Pagination count={count} page={page} onChange={handleChange} />;
};

PaginationWrapper.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  count: PropTypes.number,
};

PaginationWrapper.defaultProps = {
  count: 0,
};

export default PaginationWrapper;
