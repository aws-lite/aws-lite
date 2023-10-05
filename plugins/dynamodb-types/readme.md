
## Install

Add to `devDependencies` in `package.json`:

```
npm i -D aws-lite-dynamodb-types
```

<small>Be sure you also have `@aws-lite/dynamodb` installed.</small>

## Usage and Config

### Javascript VSCode Intellisense

In a Javascript project, the ambient types will be automatically loaded.

```js
import awsLite from '@aws-lite/client';

const client = await awsLite({ region: 'us-east-1' });
const { Item: myArticle } = await client.dynamodb.GetItem({
  TableName: 'articles',
  Key: { articleID: '123-ABC' },
});
```

`client.dynamodb.GetItem` and the `myArticle` result will have Intellisense.

### TypeScript `tsconfig`

#### Add this package to `compilerOptions.types`

Example:

```json
{
  "extends": "@tsconfig/node-lts/tsconfig.json",
  "compilerOptions": {
    "types": [
      "aws-lite-dynamodb-types"
    ]
  }
}
```

#### Or use reference types

Either in individual files or in an `index.d.ts` file.

```ts
/// <reference types="aws-lite-dynamodb-types" />
```

ymmv

```ts
/// <reference path="./node_modules/aws-lite-dynamodb-types/index.d.ts" />
```
