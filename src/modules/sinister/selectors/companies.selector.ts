import { RootState } from '@/global-store/state-types';

export const companiesSelector = (state: RootState) => state.sinister.companies.data;
export const companiesFetchingStatusSelector = (state: RootState) => state.sinister.companies.status;
