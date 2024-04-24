import { DependenciesContext } from '@/DependenciesProvider';
import { useContext } from 'react';

export const useDependencies = () => useContext(DependenciesContext);
