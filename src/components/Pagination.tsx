import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/actions';
import { RootState } from '../store/store';


function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector<RootState, number>((state) => state.products.currentPage);
    const totalPage = useSelector<RootState, string[]>((state) => state.products.totalPage);
    const handlePageClick = (pageNum: number) => {
        dispatch(setCurrentPage(pageNum));
        window.scrollTo(0, 0)
    }


    return (
        <ul className="pagination-items">
            {totalPage.length > 1 && totalPage.map((pageNum: string, idx: number) => {
                return (
                    <li className={`pagination-item ${+pageNum === currentPage ? 'selected' : ''}`}
                        key={`${pageNum}_${idx}`}
                        onClick={() => handlePageClick(+pageNum)}
                    >{pageNum}
                    </li>
                )
            })}
        </ul>
    )
}

export default Pagination;