 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../features/Cartslice';

 export const  store = configureStore({
     reducer:{
       allcart : cartReducer,


     },
 });