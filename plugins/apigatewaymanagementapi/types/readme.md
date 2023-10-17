## Install

Add to `devDependencies` in `package.json`:

```
npm i -D @aws-lite/apigatewaymanagementapi-types
```

<small>Be sure you also have `@aws-lite/apigatewaymanagementapi` installed.</small>

## Usage and Config

### Javascript VSCode Intellisense

In a Javascript project, the ambient types will be automatically loaded.

### TypeScript `tsconfig`

#### Add this package to `compilerOptions.types`

Example:

```json
{
  "extends": "@tsconfig/node-lts/tsconfig.json",
  "compilerOptions": {
    "types": [
      "@aws-lite/apigatewaymanagementapi-types"
    ]
  }
}
```

#### Or use reference types

Either in individual files or in an `index.d.ts` file.

```ts
/// <reference types="@aws-lite/apigatewaymanagementapi-types" />
```

ymmv

```ts
/// <reference path="./node_modules/@aws-lite/apigatewaymanagementapi-types/index.d.ts" />
```
