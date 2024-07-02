import { configureStore } from '@reduxjs/toolkit';
import finanzasSlice from '../slices/finanzasSlice';

export const store = configureStore({
	reducer: {
		//definimos la key 
		finanzas: finanzasSlice,
	},
});