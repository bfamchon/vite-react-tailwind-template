import { Dependencies } from '@/global-store/dependencies';
import { RootState } from '@/global-store/state-types';
import { AppDispatch } from '@/global-store/use-app-dispatch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();
