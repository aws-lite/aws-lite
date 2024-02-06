interface AwsLiteConfig {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  region?: string;
  profile?: string;
  verifyService?: boolean;
  autoloadPlugins?: boolean;
  awsConfigFile?: boolean | string;
  debug?: boolean;
  endpoint?: string;
  /** @description Alias for "endpoint" */
  url?: string;
  host?: string;
  keepAlive?: boolean;
  pathPrefix?: string;
  plugins?: any[];
  port?: number;
  protocol?: string;
  responseContentType?: string;
}

interface AwsLiteRequest {
  service: string;
  verifyService?: boolean;
  awsjson?: boolean | string[];
  path?: string;
  headers?: Record<string, string>;
  host?: string;
  payload?: Record<string, any> | Buffer | ReadableStream | string;
  /** @description Alias for "payload" */
  body?: Record<string, any> | Buffer | ReadableStream | string;
  /** @description Alias for "payload" */
  data?: Record<string, any> | Buffer | ReadableStream | string;
  port?: number;
  protocol?: string;
  query?: Record<string, any>;
  region?: string;
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
