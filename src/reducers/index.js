import dataReducer from './data';
import toDetailsReducer from './toDetails';
import tableFavorites from './tableFavorites';
import searchData from './searchData';
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    data: dataReducer,
    toDetails: toDetailsReducer,
    tableFavorites: tableFavorites,
    searchData: searchData
});

export default allReducers;