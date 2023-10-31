import React from 'react'
import { connect } from 'react-redux';
import { setPage } from '../../Redux/Actions/actions';
import './Paginado.css'

function Paginado({ currentPage, postPerPage, totalPages }) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
        pages.push(i)
    }
    return (
            <div className='paginado'>
                <span>Page {currentPage} of {totalPages} 22 </span>
            </div>
    );
};

const mapStateToProps = (state) => ({
    currentPage: state.currentPage,
    totalPages: state.totalPages,
});

const mapDispatchToProps = {
    setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginado);