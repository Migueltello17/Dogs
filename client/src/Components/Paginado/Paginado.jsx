import React from 'react'
import { connect } from 'react-redux';
import { setPage } from '../../Redux/Actions/actions';

function Paginado({ currentPage, totalPages }) {
    return (
            <div>
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