import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn 
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal  } from '../features/Cartslice';


export default function App() {


    const { cart, totalQuantity} = useSelector(( state)=> state.allcart);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCartTotal)

    },[cart])

  return (
    <MDBNavbar className='nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand >Navbar</MDBNavbarBrand>
        <span>
        <Link to= '/'> All-product</Link>
        </span>
        <MDBBtn color="dark">
         <Link to = '/cart'> Cart({totalQuantity})</Link> 
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  )
};