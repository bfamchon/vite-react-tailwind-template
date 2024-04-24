import { Dependencies } from '@/global-store/dependencies';
import { createContext } from 'react';

export const DependenciesContext = createContext<Dependencies>({} as Dependencies);

export const DependenciesProvider: React.FC<{
  dependencies: Dependencies;
  children: React.ReactNode;
}> = ({ dependencies, children }) => {
  return <DependenciesContext.Provider value={dependencies}>{children}</DependenciesContext.Provider>;
};
