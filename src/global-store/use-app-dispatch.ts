import { Dependencies } from '@/global-store/dependencies';
import { RootState } from '@/global-store/state-types';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export type AppDispatch = ThunkDispatch<RootState, Dependencies, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
