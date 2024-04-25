interface AwsLiteConfig {
  // Core AWS config
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  region?: string;
  profile?: string;
  // All other config
  autoloadPlugins?: boolean;
  awsConfigFile?: boolean | string;
  debug?: boolean;
  endpoint?: string;
  host?: string;
  keepAlive?: boolean;
  pathPrefix?: string;
  plugins?: any[];
  port?: number;
  protocol?: string;
  responseContentType?: string;
  retries?: number;
  /** @description Alias for "endpoint" */
  url?: string;
  verifyService?: boolean;
}

interface AwsLiteRequest {
  awsjson?: boolean | string[];
  /** @description Alias for "payload" */
  body?: Record<string, any> | Buffer | ReadableStream | string;
  /** @description Alias for "payload" */
  data?: Record<string, any> | Buffer | ReadableStream | string;
  headers?: Record<string, string>;
  host?: string;
  path?: string;
  payload?: Record<string, any> | Buffer | ReadableStream | string;
  port?: number;
  protocol?: string;
  query?: Record<string, any>;
  region?: string;
  service: string;
  streamResponsePayload?: boolean,
  verifyService?: boolean;
}

interface AwsLiteResponse {
  headers: Record<string, string>;
  payload: Record<string, any>;
  statusCode: number;
}

// export to allow <plugin>-types to extend AwsLiteClient
export interface AwsLiteClient {
  (payload: AwsLiteRequest): Promise<AwsLiteResponse>;
}

declare module "@aws-lite/client" {
  const CreateAwsLite: (config?: AwsLiteConfig) => Promise<AwsLiteClient>;
  export = CreateAwsLite;
}
