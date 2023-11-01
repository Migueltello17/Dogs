import React from 'react'
import { connect } from 'react-redux';
import { setPage } from '../../Redux/Actions/actions';
import { useSelector } from 'react-redux';
import './Paginado.css'

function Paginado({ currentPage, postPerPage, totalPages }) {
    let pages = [];
    const filters = useSelector((state) => state.filter); //useSelector: obtiene estado actual de filtros
    const backUp = useSelector((state) => state.dogsBackUP); // de lista de respaldo de perros
    const filtered = useSelector((state) => state.dogsFiltered); // de filtrado de los perros
    // Si hay filtros, finalPage = cantidad de la lista de perros filtrados / cantidad de elementos por pagina
    let finalPage = filters ? Math.ceil(filtered.length / 8) : Math.ceil(backUp.length / 8);
   
    // Pages= 1 al numero total. En el div muestra pagina actual y el numero total de paginas
    for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {  
        pages.push(i)
    } console.log(filtered.length)

    return (
        <div className='paginado'>
            <span>Page {currentPage} of {finalPage} </span> 
            </div>
    );
};

// Mapeo de propiedades 
const mapStateToProps = (state) => ({
    currentPage: state.currentPage,
    totalPages: state.totalPages,
});

const mapDispatchToProps = {
    setPage,
};


export default connect(mapStateToProps, mapDispatchToProps)(Paginado);