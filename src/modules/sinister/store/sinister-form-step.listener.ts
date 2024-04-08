import { FormStep } from '@/modules/sinister/entity/sinister.domain-model';
import { sinisterSlice } from '@/modules/sinister/store/sinister.slice';
import { ListenerMiddlewareInstance } from '@reduxjs/toolkit';

export const registerSinisterFormStepListener = (listener: ListenerMiddlewareInstance) => {
  listener.startListening({
    actionCreator: sinisterSlice.actions.setInsuranceContractForm,
    effect: (_, api) => {
      api.dispatch(sinisterSlice.actions.setStep(FormStep.SUBMITTER));
    }
  });
};
