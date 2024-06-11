# aws-lite changelog

---

## [0.21.9] 2024-06-11

### Added

- Pass instantiated client to plugin `utils` methods

---

## [0.21.8] 2024-06-10

### Changed

- Pass plugins the shared AWS JSON (un)marshall methods, which can accept `awsjsonMarshall` / `awsjsonUnmarshall` config options

---

## [0.21.7] 2024-05-21

### Fixed

- Fixed regression caused by previous fix

---

## [0.21.6] 2024-05-20

### Fixed

- Fixed issue where `aws4` mutates values passed as references, possibly breaking sequential requests; thanks @w5mix!

---

## [0.21.5] 2024-05-18

### Changed

- Increased retry latency to better match AWS SDK v3's behavior; should improve #127; thanks @alexbepple!

---

## [0.21.4] 2024-05-16

### Changed

- Increase verbosity of debug output: include paginated requests, include full req / res bodies (if strings)

---

## [0.21.3] 2024-05-14

### Changed

- Updated dependencies


### Fixed

- Inspect error payloads for clock skew, throttling, and transient error codes; fixes #127
- Update Node.js connection error codes

---

## [0.21.2] 2024-05-08

### Fixed

- Fixed issue where pagination may break if the API that accepts multiple `cursor`s returns only a subset of possible `token`s

---

## [0.21.1] 2024-04-26

### Fixed

- Allow paginator to accept nested tokens
  - Because XML, of course

---

## [0.21.0] 2024-04-25

### Added

- Added `streamResponsePayload` request parameter to return the response payload as a Node.js stream; partially fixes #65

---

## [0.20.0] 2024-03-07

### Added

- Added `awsjsonMarshall` / `awsjsonUnmarshall` config options
- Added pagination support for `cursor` / `token` arrays for APIs that paginate with multiple tokens
- Added XML namespace support via `xmlns` property

---

## [0.19.0] 2024-02-28

### Added

- Added low-level retries with jitter / backoff; fixes #106

---

## [0.18.0] 2024-02-15

### Added

- Added integrated testing API; fixes #102
  - Read more at https://aws-lite.org/testing-api
  - Feature should be considered experimental


### Changed

- Removed Node.js 14.x support

---

## [0.17.3] 2024-02-22

### Added

- Enable debug mode via `AWS_LITE_DEBUG` environment variable


### Changed

- Chill out plugin debug enumeration a bit

---

## [0.17.2] 2024-02-08

### Fixed

- Changed variable name for extra strict bundlers; fixes #99

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
