import { sinisterReducer } from '@/modules/sinister/store/sinister.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  sinister: sinisterReducer
});
