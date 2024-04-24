import { AppStore, createStore } from '@/global-store/create-store';
import { Dependencies } from '@/global-store/dependencies';
import { FakeCompaniesGateway } from '@/modules/sinister/infrastructure/fake-companies.gateway';
import { AppRouter, createRouter } from '@/router';

export class App {
  public dependencies: Dependencies;
  public store: AppStore;
  public router: AppRouter;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore(this.dependencies);
    this.router = createRouter();
  }

  setupDependencies(): Dependencies {
    return {
      companiesGateway: new FakeCompaniesGateway()
    };
  }
}

export const app = new App();
