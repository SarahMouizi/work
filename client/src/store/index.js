import {configureStore} from '@reduxjs/toolkit' ;
import contactSlice from './ContactSlice';

export default configureStore({
   reducer : {
       contactee : contactSlice
   }

})