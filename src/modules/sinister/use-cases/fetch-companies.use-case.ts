import { createAppAsyncThunk } from '@/global-store/create-app-thunk';
import { extractErrorMessage } from '@/shared/errors.utils';

export const fetchCompanies = createAppAsyncThunk(
  'sinister/fetchCompanies',
  async (_, { extra: { companiesGateway }, rejectWithValue }) => {
    try {
      return companiesGateway.getCompanies();
    } catch (e) {
      return rejectWithValue(extractErrorMessage(e));
    }
  }
);
