# Generating plugin types

Run `npm install`, then `npm run gen`. Commit the generated declarations with plugin changes.

Each service publishes two declaration files:

- `src/index.d.mts`: plugin and method types generated from validation definitions, with hand-written overrides.
- `src/aws-sdk.d.ts`: response types extracted from the installed AWS SDK using `dts-bundle-generator`.

To refresh SDK types, update the service's development dependency (for example, `npm update @aws-sdk/client-s3 --workspace @aws-lite/s3`), regenerate, and review the changes.

Run `npm run test:types` to check API declarations and `npm run test:types:standalone` to compile a consumer of the packed packages. The package test uses the npm cache populated by `npm install`.

Response types follow AWS SDK models; aws-lite stream and DynamoDB unmarshalling results may differ.
