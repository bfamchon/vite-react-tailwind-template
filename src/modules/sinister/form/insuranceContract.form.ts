import { InsuranceContract, SinisterForm } from '@/modules/sinister/entity/sinister.domain-model';
import { CompaniesGatewayInterface } from '@/modules/sinister/gateway/companies.gateway';
import { produce } from 'immer';

export class InsuranceContractForm {
  constructor(private companyGateway: CompaniesGatewayInterface) {}

  updateField<T extends keyof InsuranceContract>(state: SinisterForm, key: T, value: InsuranceContract[T]) {
    return produce(state, (draft) => {
      draft.insuranceContract[key] = value;
    });
  }

  isSubmittable(state: SinisterForm) {
    if (
      state.insuranceContract.contractNumber.length < 10 ||
      state.insuranceContract.company.id === '' ||
      state.insuranceContract.company.name === ''
    ) {
      return false;
    }
    return true;
  }
}
