import ReactPaginateImport from 'react-paginate';
import css from './Pagination.module.css';

const ReactPaginate =
  (
    ReactPaginateImport as unknown as {
      default?: typeof ReactPaginateImport;
    }
  ).default ?? ReactPaginateImport;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={handlePageChange}
      previousLabel="←"
      nextLabel="→"
      breakLabel="..."
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName={css.pagination}
      pageClassName={css.page}
      pageLinkClassName={css.pageLink}
      activeClassName={css.active}
      previousClassName={css.page}
      nextClassName={css.page}
      previousLinkClassName={css.pageLink}
      nextLinkClassName={css.pageLink}
      disabledClassName={css.disabled}
      breakClassName={css.page}
      breakLinkClassName={css.pageLink}
    />
  );
}

export default Pagination;