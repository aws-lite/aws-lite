// https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries
// 'We call declarations that don't define an implementation "ambient".'

declare module "@aws-lite/client" {
  export interface AwsLiteConfig {
    accessKeyId?: string;
    secretAccessKey?: string;
    sessionToken?: string;
    region?: string;
    profile?: string;
    autoloadPlugins?: boolean;
    awsConfigFile?: boolean | string;
    debug?: boolean;
    endpointPrefix?: string;
    host?: string;
    keepAlive?: boolean;
    plugins?: any[];
    port?: number;
    protocol?: string;
    responseContentType?: string;
  }

  export interface AwsLiteRequest {
    service: string;
    awsjson?: boolean | string[];
    endpoint?: string;
    headers?: Record<string, string>;
    payload?: Record<string, any> | Buffer | ReadableStream | string;
    /** @description Alias for "payload" */
    body?: Record<string, any> | Buffer | ReadableStream | string;
    /** @description Alias for "payload" */
    data?: Record<string, any> | Buffer | ReadableStream | string;
    /** @description Alias for "payload" */
    json?: Record<string, any> | Buffer | ReadableStream | string;
    query?: Record<string, any>;
    region?: string;
    protocol?: string;
    host?: string;
    port?: number;
  }


  export interface AwsLiteResponse {
    headers: Record<string, string>;
    payload: Record<string, any>;
    statusCode: number;
  }

  export interface AwsLiteClient {
    (payload: AwsLiteRequest): Promise<AwsLiteResponse>;
  }

  const AwsLite: (config?: AwsLiteConfig) => Promise<AwsLiteClient>;
  export = AwsLite;
}
