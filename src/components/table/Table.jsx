import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import { StyledTableHead } from './Table.styles';

const TableWrapper = ({ headers, rows }) => (
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
};

export default TableWrapper;
