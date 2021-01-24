import dataReducer from './data';
import toDetailsReducer from './toDetails';
import tableFavorites from './tableFavorites';
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    data: dataReducer,
    toDetails: toDetailsReducer,
    tableFavorites: tableFavorites
});

export default allReducers;