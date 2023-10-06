aws_json_comment='/* Vendored with gratitude from https://github.com/aws/aws-sdk-js-v3 and used under the Apache 2.0 license */'
esbuild scripts/vendor/vendor-aws-json-entry.mjs --bundle --platform=node --format=cjs --outfile=src/_vendor/aws.js --banner:js="$aws_json_comment"

xml_comment='/* Vendored with gratitude from https://github.com/NaturalIntelligence/fast-xml-parser and used under the MIT license */'
esbuild scripts/vendor/vendor-xml-entry.mjs --bundle --platform=node --format=cjs --outfile=src/_vendor/xml.js --minify --banner:js="$xml_comment"
