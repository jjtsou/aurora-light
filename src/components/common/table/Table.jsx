import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Skeleton from '@material-ui/lab/Skeleton';
import { StyledTableHead, useStyles } from './Table.styles';

const TableWrapper = ({ headers, rows, isPending }) => {
  const classes = useStyles();
  return isPending ? (
    <Skeleton width="100%" height="77vh" variant="rect" component={Paper} />
  ) : (
    <TableContainer classes={{ root: classes.root }} component={Paper}>
      <Table aria-label="simple table">
        <StyledTableHead>
          <TableRow>{headers}</TableRow>
        </StyledTableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

TableWrapper.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.node).isRequired,
  rows: PropTypes.arrayOf(PropTypes.node).isRequired,
  isPending: PropTypes.bool,
};

TableWrapper.defaultProps = {
  isPending: false,
};

export default TableWrapper;
