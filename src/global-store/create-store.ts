import { Dependencies } from '@/global-store/dependencies';
import { rootReducer } from '@/global-store/root-reducer';
import { RootState } from '@/global-store/state-types';
import { registerFetcherListeners } from '@/modules/sinister/store/fetcher.listener';
import { registerSinisterFormStepListener } from '@/modules/sinister/store/sinister-form-step.listener';
import { Action, Middleware, configureStore, createListenerMiddleware, isAction } from '@reduxjs/toolkit';

export const createStore = (dependencies: Dependencies, preloadedState?: Partial<RootState>) => {
  const actions: Action[] = [];
  const logActionsMiddleware: Middleware = () => (next) => (action) => {
    if (isAction(action)) {
      actions.push(action);
    }
    return next(action);
  };

  const listener = createListenerMiddleware();
  registerFetcherListeners(listener);
  registerSinisterFormStepListener(listener);

  const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies
        }
      })
        .prepend(logActionsMiddleware)
        .prepend(listener.middleware);
    },
    preloadedState
  });

  return { ...store, getActions: () => actions };
};

type AppStoreWithGetActions = ReturnType<typeof createStore>;
export type AppStore = Omit<AppStoreWithGetActions, 'getActions'>;
