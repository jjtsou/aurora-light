import { styled, makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({
  root: {
    maxHeight: '77vh',
  },
});

const StyledTableHead = styled(TableHead)({
  background: '#f5f5f5',
});

const StyledTableRow = styled(TableRow)({
  cursor: 'pointer',
});

const StyledTableCell = styled(TableCell)({
  width: '15%',
});

export { useStyles, StyledTableHead, StyledTableRow, StyledTableCell };
