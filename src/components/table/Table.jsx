import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Skeleton from '@material-ui/lab/Skeleton';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import { StyledTableHead } from './Table.styles';

const TableWrapper = ({ headers, rows, isPending }) =>
  isPending ? (
    <Skeleton width="100%" height="65vh" variant="rect" component={Paper} />
  ) : (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <StyledTableHead>
          <TableRow>{headers}</TableRow>
        </StyledTableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );

TableWrapper.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.node).isRequired,
  rows: PropTypes.arrayOf(PropTypes.node).isRequired,
  isPending: PropTypes.bool,
};

TableWrapper.defaultProps = {
  isPending: false,
};

export default TableWrapper;
