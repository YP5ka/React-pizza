import React from 'react'
import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'
 const Pagination = ({currentPage, onChangePage}) => {
  return (
    <div className={styles.root}><ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected + 1) }
    pageRangeDisplayed={4}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  /></div>
  )
}
export default Pagination;