import dataReducer from './data';
import toDetailsReducer from './toDetails';
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    data: dataReducer,
    toDetails: toDetailsReducer
});

export default allReducers;