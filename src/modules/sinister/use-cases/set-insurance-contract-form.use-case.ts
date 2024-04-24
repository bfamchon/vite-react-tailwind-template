import { AppDispatch } from '@/global-store/use-app-dispatch';
import type { SinisterForm } from '@/modules/sinister/entity/sinister.domain-model';
import { sinisterActions } from '@/modules/sinister/store/sinister.slice';

export const setInsuranceContractForm = (form: SinisterForm) => async (dispatch: AppDispatch) => {
  dispatch(sinisterActions.setInsuranceContractForm(form));
};
