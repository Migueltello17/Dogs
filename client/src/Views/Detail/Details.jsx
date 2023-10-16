import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { getDetails, deleteDetails } from '../../Redux/Actions/actions';
import { useParams } from 'react-router-dom';
import './Details.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    dispatch(getDetails(id));
    return ()=> dispatch(deleteDetails());
    // eslint-disable-next-line
  },[id]);
  
  const dog = useSelector((state) => state.detail);
  console.log("esto es dog de temperament:", dog);
  

  return (
    <div className='detailContainer' >
      <div  >
        <img className='imgContainer' src={dog.image} alt={dog.name} />
      </div>
      <div className='infoContainer'>
        
          <div>{dog.id} </div>
          <div>{dog.name}</div>
          <div>{dog.height} cm</div>
          <div>{dog.weight} kg</div>
          <div>{dog.life_span}</div>
      </div>
    </div>
  )
  
}

export default Detail;