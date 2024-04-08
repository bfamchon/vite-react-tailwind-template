import { Company } from '@/modules/sinister/entity/sinister.domain-model';

export interface CompaniesGatewayInterface {
  getCompanies(): Promise<Company[]>;
  validateCompanyContractNumber({
    companyId,
    contractNumber
  }: {
    companyId: string;
    contractNumber: string;
  }): Promise<boolean>;
}
