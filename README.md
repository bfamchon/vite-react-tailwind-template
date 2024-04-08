# React + TypeScript + Vite

volta introduction and pin to node 20

`pnpm create vite my-vue-app --template react-ts`
git init

create `.prettierrc`
install pretty-quick add add script `"pretty": "pretty-quick --staged"`

husky hook `pnpm add --save-dev husky`
`pnpx husky init`
add scripts:

```json
    "hook:pre-commit": "pnpm type-check && pnpm run lint && pnpm run pretty",
    "hook:pre-push": "pnpm run test"
```

install vitest and add config

```ts
// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['src/**/*.(test|spec).ts']
    }
  })
);
```

test a dummy file

add eslint config to a11y (may restart eslint server)

```cjs
extends: [
    ...
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [..., 'jsx-a11y'],
```

change html lang attribute to fr
