// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import cityReducer from './slices/city'
import weatherDetailsReducer from './slices/weatherdetails';
import cityImageReducer from './slices/cityImage';

const rootReducer = combineReducers({
    city: cityReducer,
    weather: weatherDetailsReducer,
    cityImg : cityImageReducer
});

export default rootReducer;
