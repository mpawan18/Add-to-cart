import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Cartslice';

export default function App() {

    const dispatch = useDispatch();

    const items = useSelector((state) => state.allcart.items);
    //this is from  cartslice;


    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className='mb-3'>
                    {items.map((item) => (
                        <MDBCol key={item.id} size='md'>
                            <MDBCard>
                                <MDBCardImage src={item.img} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle> <strong> {item.title} </strong></MDBCardTitle>
                                    <MDBCardText>
                                        Price: {item.price} $
                                    </MDBCardText>
                                    <MDBBtn onClick={() => dispatch(addToCart(item))}>Add To Cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    ))

                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}