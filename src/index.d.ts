// https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries
// 'We call declarations that don't define an implementation "ambient".'

declare module "@aws-lite/client" {
  interface AwsLiteConfig {
    accessKeyId?: string;
    secretAccessKey?: string;
    sessionToken?: string;
    region?: string;
    profile?: string;
    autoloadPlugins?: boolean;
    debug?: string;
    keepAlive?: boolean;
    protocol?: string;
    host?: string;
    port?: number;
    plugins?: any[];
  }

  interface AwsLiteRequest {
    awsjson?: boolean | string[];
    endpoint?: string;
    headers?: Record<string, string>;
    payload?: Record<string, any> | Buffer | ReadableStream | string;
    query?: Record<string, any>;
    service: string;
    region?: string;
    protocol?: string;
    host?: string;
    port?: number;
  }


  interface AwsLiteResponse {
    statusCode: number;
    headers: Record<string, string>;
    payload: Record<string, any> | Buffer | ReadableStream | string;
  }

  interface AwsLiteClient {
    (payload: AwsLiteRequest): Promise<AwsLiteResponse>;
  }

  export default function AwsLite(config?: AwsLiteConfig): Promise<AwsLiteClient>;
}
