import { useAppDispatch } from '@/global-store/use-app-dispatch';
import { InsuranceContract, SinisterForm } from '@/modules/sinister/entity/sinister.domain-model';
import { InsuranceContractForm } from '@/modules/sinister/form/insuranceContract.form';
import {
  companiesFetchingStatusSelector,
  companiesSelector
} from '@/modules/sinister/selectors/companies.selector';
import { selectForm } from '@/modules/sinister/selectors/form.selector';
import { fetchCompanies } from '@/modules/sinister/use-cases/fetch-companies.use-case';
import { setInsuranceContractForm } from '@/modules/sinister/use-cases/set-insurance-contract-form.use-case';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const useInsuranceContract = () => {
  function onNext(event: React.FormEvent) {
    event.preventDefault();
    dispatch(setInsuranceContractForm(form));
  }

  function isSubmittable() {
    return insuranceContractForm.current.isSubmittable(form);
  }

  function updateField<T extends keyof InsuranceContract>(key: T, value: InsuranceContract[T]) {
    setForm(insuranceContractForm.current.updateField(form, key, value));
  }

  const insuranceContractForm = useRef(new InsuranceContractForm());

  const dispatch = useAppDispatch();

  const companies = useSelector(companiesSelector);
  const initialForm = useSelector(selectForm);
  const companiesFetchingStatus = useSelector(companiesFetchingStatusSelector);

  const [form, setForm] = useState<SinisterForm>(initialForm);

  if (companiesFetchingStatus === 'idle') {
    dispatch(fetchCompanies());
  }
  return {
    companies,
    updateCompany: (value: string) => {
      const company = companies.find((c) => c.id === value);
      if (!company) {
        return;
      }
      updateField('company', { ...company });
    },
    form,
    onNext,
    isSubmittable: isSubmittable(),
    updateField
  };
};
