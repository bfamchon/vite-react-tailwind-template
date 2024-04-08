import { FormStep } from '@/modules/sinister/entity/sinister.domain-model';
import { selectStep } from '@/modules/sinister/selectors/step.selector';
import { InsuranceContractSection } from '@/pages/Sinister/sections/insurance-contract/InsuranceContractSection';
import { SubmitterSection } from '@/pages/Sinister/sections/submitter/SubmitterSection';
import * as Separator from '@radix-ui/react-separator';
import { useSelector } from 'react-redux';

export const Sinister = () => {
  const step = useSelector(selectStep);

  return (
    <div className="flex w-screen h-screen min-h-screen container">
      <aside className="">
        <ol>
          <li className="flex items-center">
            <span className="block w-[10px] h-[10px] rounded-full bg-slate-400 mr-2"></span>Contrat
            d'assurance
          </li>
          <li>Souscripteur</li>
          <li>Courtier</li>
          <li>Construction</li>
          <li>Sinistre</li>
          <li>Pièces-jointes</li>
          <li>Validation</li>
        </ol>
      </aside>
      <Separator.Root className="w-[1px] h-full bg-slate-200 mx-3" decorative orientation="vertical" />
      {step === FormStep.INSURANCE_CONTRACT && <InsuranceContractSection />}
      {step === FormStep.SUBMITTER && <SubmitterSection />}
    </div>
  );
};
