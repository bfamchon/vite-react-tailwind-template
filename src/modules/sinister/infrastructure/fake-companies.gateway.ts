import { CompanyFactory } from '@/modules/sinister/entity/company.factory';
import { CompaniesGatewayInterface } from '@/modules/sinister/gateway/companies.gateway';

export class FakeCompaniesGateway implements CompaniesGatewayInterface {
  companiesContractsMap = new Map<string, string[]>();

  validateCompanyContractNumber({
    companyId,
    contractNumber
  }: {
    companyId: string;
    contractNumber: string;
  }): Promise<boolean> {
    return Promise.resolve(this.companiesContractsMap.get(companyId)?.includes(contractNumber) ?? false);
  }
  getCompanies() {
    const companies = [
      CompanyFactory.create({
        id: '1',
        name: 'AXA'
      }),
      CompanyFactory.create({
        id: '2',
        name: 'GMF'
      })
    ];
    return Promise.resolve(companies);
  }
}
