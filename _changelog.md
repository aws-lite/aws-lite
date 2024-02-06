# aws-lite changelog

---

## [0.17.0 - 0.17.1] 2024-02-06

### Added

- Client config option `verifyService` (default: `true`) can be set to `false` to skip checking service name against the internal list of known AWS services on all requests
  - This option is also considered when loading and validating plugins
- Request param `verifyService` (default: `true`) does the same, on a per-request basis


### Changed

- By default, plugins must be loaded manually as objects or import / require statements
  - String identifiers are no longer accepted
  - Examples:
    - `import dynamodb from '@aws-lite/dynamodb'; await awsLite({ plugins: [ dynamodb ] })`
    - `const dynamodb = require('@aws-lite/dynamodb'); await awsLite({ plugins: [ dynamodb ] })`
    - `await awsLite({ plugins: [ import('@aws-lite/dynamodb') ] })`
    - `await awsLite({ plugins: [ await import('@aws-lite/dynamodb') ] })`
    - `await awsLite({ plugins: [ require('@aws-lite/dynamodb') ] })`
- `autoloadPlugins` is disabled by default; it is no longer suggested for production use, and should generally be used for quick local iteration
- These changes pertain to / resolve RFC #96

---

## [0.16.1] 2024-02-04

### Fixed

- Refactor plugin autoloading strategy to more reliably find aws-lite plugins; hopefully fixes #94
  - This should hopefully resolve issues where attempting to find aws-lite plugins in node_modules may be impossible if the dependency tree is not flat

---

## [0.16.0] 2024-02-03

### Added

- Added `rawResponsePayload` request parameter to disable automatic JSON + XML parsing of responses

---

## [0.15.0 - 0.15.1] 2024-01-29

### Added

- Added `endpoint` param (and `url` alias); fixes #82
- (Mostly) conform to WHATWG URL standard component names for custom endpoint configuration; fixes #86
  - Config param `endpointPrefix` is now `pathPrefix`
  - Request param `endpoint` is now `path`
- Display full `authorization` header with signature redacted in debug mode
- Display plugin loading in debug mode
- Added STS to semi-global services
- Added some missing types


### Changed

- Improved protocol validation
- Improved duplicate slash improvement in path construction
- Updated deps


### Removed

- Removed `json` payload alias
  - An early idea that didn't really make sense as time went on!

---

> Note: this changelog is intentionally named `_changelog.md` to ensure npm will ignore it during publishing, thereby not taking up any additional space on disk after install
