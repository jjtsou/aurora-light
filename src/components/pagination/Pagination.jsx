import { useState } from 'react';
import PropTypes from 'prop-types';
import BootstrapPagination from 'react-bootstrap/Pagination';

const Pagination = ({ items }) => {
  const [page, setPage] = useState(items?.[0]);
  const handleItemClick = (value) => () => setPage(value);
  const goToPrevItem = () => {
    if (items[0] < page) setPage((previousPage) => previousPage - 1);
  };
  const goToNextItem = () => {
    if (items.length > page) setPage((previousPage) => previousPage + 1);
  };

  return (
    !!items?.length && (
      <BootstrapPagination>
        <BootstrapPagination.Prev onClick={goToPrevItem} />
        {items.map((item) => (
          <BootstrapPagination.Item
            key={item}
            active={item === page}
            onClick={handleItemClick(item)}
          >
            {item}
          </BootstrapPagination.Item>
        ))}
        <BootstrapPagination.Next onClick={goToNextItem} />
      </BootstrapPagination>
    )
  );
};

Pagination.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number),
};

Pagination.defaultProps = {
  items: [],
};

export default Pagination;
