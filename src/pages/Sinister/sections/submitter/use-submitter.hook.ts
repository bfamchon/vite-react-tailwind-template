import { useAppDispatch } from '@/create-store';
import { FormStep, SinisterForm, Submitter } from '@/modules/sinister/entity/sinister.domain-model';
import { SubmitterForm } from '@/modules/sinister/form/submitter.form';
import { selectForm } from '@/modules/sinister/selectors/form.selector';
import { sinisterSlice } from '@/modules/sinister/store/sinister.slice';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const useSubmitter = () => {
  function onPrevious() {
    dispatch(sinisterSlice.actions.setStep(FormStep.INSURANCE_CONTRACT));
  }

  function updateField<T extends keyof Submitter>(key: T, value: Submitter[T]) {
    console.log('updateField', key, value);
    setForm(submitterForm.current.updateField(form, key, value));
  }
  const dispatch = useAppDispatch();
  const submitterForm = useRef(new SubmitterForm());
  const initialForm = useSelector(selectForm);
  const [form, setForm] = useState<SinisterForm>(initialForm);

  return {
    onPrevious,
    submitterTypes: ['Personne', 'Entreprise'],
    form,
    updateField
  };
};
