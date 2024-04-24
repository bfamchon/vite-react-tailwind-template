import { RootState } from '@/global-store/state-types';

export const selectStep = (state: RootState) => state.sinister.step;
