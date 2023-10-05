// https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries
// 'We call declarations that don't define an implementation "ambient".'

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

interface AwsLiteClientOptions { } // TODO: define

interface AwsLiteClientResponse { } // TODO: define

declare interface AwsLiteClient {
  (payload: Record<string, any>): Promise<Record<string, any>>;
}

declare module "@aws-lite/client" {
  export default function AwsLite(config?: AwsLiteConfig): Promise<AwsLiteClient>;
}
