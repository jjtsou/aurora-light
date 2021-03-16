import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import { StyledTableHead, useStyles } from './Table.styles';

const TableWrapper = ({ headers, rows }) => {
  const classes = useStyles();
  return (
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
  rows: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]).isRequired,
};

export default TableWrapper;
