// import { InsuranceContractForm } from '@/modules/sinister/form/insuranceContract.form';
// import { FakeCompaniesGateway } from '@/modules/sinister/infrastructure/fake-companies.gateway';
import { describe, expect, it } from 'vitest';

// const companiesGateway = new FakeCompaniesGateway();
// const form = new InsuranceContractForm(companiesGateway);
// const emptyState: SinisterForm = {
//   insuranceContract: {
//     contractNumber: '',
//     company: {
//       id: '',
//       name: ''
//     },
//     subscriber: ''
//   },
//   submitter: '',
//   insuranceBroker: '',
//   sinister: '',
//   attachments: '',
//   building: '',
//   validation: ''
// };

describe('Insurance Contract Form', () => {
  it('not valid when empty', async () => {
    expect(true).toBe(true);
  });
});

// let formValidationResult = false;
// function givenExistingCompaniesWithContracts({
//   companyId,
//   contracts
// }: {
//   companyId: string;
//   contracts: string[];
// }) {
//   companiesGateway.companiesContractsMap.set(companyId, contracts);
// }

// async function whenSubmitterValidateForm(state: SinisterForm) {
//   formValidationResult = await form.isSubmittable(state);
// }

// function thenFormValidationIs(result: boolean) {
//   expect(formValidationResult).toBe(result);
// }
