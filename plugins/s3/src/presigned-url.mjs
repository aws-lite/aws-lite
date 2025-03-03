import lib from './lib.mjs'
const { getHeadersFromParams, getQueryFromParams } = lib

const str = { type: 'string' }
const num = { type: 'number' }

const Bucket = { ...str, required: true, comment: 'S3 bucket name' }
const Key = { ...str, required: true, comment: 'S3 key / file name' }

function getHost ({ Bucket }, { region, config }) {
  // Deprecated path-style URLs, still necessary for buckets with periods
  if (/\./.test(Bucket)) {
    return {
      host: config.host || `s3.${region}.amazonaws.com`,
      pathPrefix: `/${Bucket}`
    }
  }
  // Current virtual-hosted-style URls
  return { host: `${Bucket}.` + (config.host || `s3.${region}.amazonaws.com`) }
}

const GetPresignedUrl = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html',
  validate: {
    Bucket,
    Key,
    PartNumber: { ...num, comment: 'Part number (between 1 - 10,000) of the object' },
    VersionId: { ...str, comment: 'Reference a specific version of the object' },
    ResponseCacheControl: { ...str, comment: 'Sets response header: `cache-control`' },
    ResponseContentDisposition: { ...str, comment: 'Sets response header: `content-disposition`' },
    ResponseContentEncoding: { ...str, comment: 'Sets response header: `content-encoding`' },
    ResponseContentLanguage: { ...str, comment: 'Sets response header: `content-language`' },
    ResponseContentType: { ...str, comment: 'Sets response header: `content-type`' },
    ResponseExpires: { ...str, comment: 'Sets response header: `expires`' },
    Expires: { ...num, comment: 'Expiration time in seconds for the presigned URL (default: 3600)' },
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
      signQuery: true,
      expires: params.Expires || 3600,
    }
  },
  response: ({ url }) => ({ url }),
}

const methods = { GetPresignedUrl }
export default { methods }
