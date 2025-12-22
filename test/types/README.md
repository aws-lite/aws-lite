# Type Tests

This directory contains type tests for aws-lite using [tsd](https://github.com/tsdjs/tsd).

## Overview

Type tests validate that TypeScript definitions match the expected API surface. Unlike runtime tests, these tests are statically analyzed at compile-time to ensure type safety.

## Running Tests

```bash
# Run all type tests
npm run test:types

# Type tests are also included in:
npm test              # Full test suite
npm run test:precommit  # Pre-commit hook
```

## Test Structure

- `index.test-d.ts` - Core client type tests (config, request, response, testing)
- `plugin-dynamodb.test-d.ts` - DynamoDB plugin type tests
- `plugin-s3.test-d.ts` - S3 plugin type tests

## Writing Type Tests

Type tests use tsd assertions:

```typescript
import { expectType, expectError, expectAssignable } from 'tsd'

// Assert exact type match
expectType<string>(myFunction())

// Assert expression causes type error
expectError(myFunction(123)) // Should only accept strings

// Assert type is assignable (loose check)
expectAssignable<MyInterface>({ prop: 'value' })
```

## Adding Tests for New Plugins

When adding a new plugin, create a test file named `plugin-{service}.test-d.ts` in `test/types/`:

1. Test 3-5 representative methods covering:
   - Required vs optional parameters
   - Complex nested objects
   - Different return types
2. Test module augmentation (plugin namespace exists)
3. Test error scenarios with `expectError`

Example:

```typescript
import { expectError } from 'tsd'
import awsLite = require('@aws-lite/client')

awsLite({ plugins: [import('@aws-lite/my-plugin')] }).then((client) => {
  // Test plugin namespace exists
  client.MyPlugin

  // Test method with required params
  client.MyPlugin.MyMethod({
    RequiredParam: 'value',
  })

  // Test missing required param errors
  expectError(client.MyPlugin.MyMethod({}))

  return client
})
```

## Resources

- [tsd documentation](https://github.com/tsdjs/tsd)
- [TypeScript Type Testing Best Practices](https://2ality.com/2022/11/testing-static-types-typescript.html)
