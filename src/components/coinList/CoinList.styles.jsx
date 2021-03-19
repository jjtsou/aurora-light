import uuid from 'react-uuid';
import Skeleton from '@material-ui/lab/Skeleton';
import TableCell from '@material-ui/core/TableCell';
import { StyledTableRow } from '../common';

const tableRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const CoinListSkeleton = () =>
  tableRows.map(() => (
    <StyledTableRow key={uuid()}>
      <TableCell style={{ padding: 7, width: '15%' }}>
        <Skeleton width="50%" height="4vh" variant="text" />
      </TableCell>
      <TableCell style={{ padding: 7, width: '15%' }}>
        <Skeleton
          width="50%"
          height="4vh"
          variant="text"
          style={{ margin: '0 auto' }}
        />
      </TableCell>
      <TableCell style={{ padding: 7, width: '15%' }}>
        <Skeleton
          width="50%"
          height="4vh"
          variant="text"
          style={{ margin: '0 auto' }}
        />
      </TableCell>
      <TableCell style={{ padding: 7, width: '15%' }}>
        <Skeleton
          width="50%"
          height="4vh"
          variant="text"
          style={{ margin: '0 auto' }}
        />
      </TableCell>
      <TableCell style={{ padding: 7, width: '15%' }}>
        <Skeleton
          width="50%"
          height="4vh"
          variant="text"
          style={{ margin: '0 auto' }}
        />
      </TableCell>
      <TableCell style={{ padding: 7, width: '15%' }}>
        <Skeleton
          width="50%"
          height="4vh"
          variant="text"
          style={{ margin: '0 auto' }}
        />
      </TableCell>
    </StyledTableRow>
  ));
