import { styled } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const StyledTableHead = styled(TableHead)({
  background: 'whitesmoke',
});

const StyledTableRow = styled(TableRow)({
  cursor: 'pointer',
});

const StyledTableCell = styled(TableCell)({
  width: '15%',
});

export { StyledTableHead, StyledTableRow, StyledTableCell };
