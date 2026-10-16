// Namespace containing all aws-lite types
declare namespace CreateAwsLite {
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

  // Base type for common parameters available on all plugin methods
  interface AwsLiteMethodOptions {
    /** Override the region for this specific method call */
    region?: string;
  }

  interface AwsLitePaginator {
    /** @description Property name(s) to pass the pagination token in subsequent requests */
    cursor: string | string[];
    /** @description Property name(s) of the pagination token in the response */
    token: string | string[];
    /** @description Response property to accumulate across pages (required unless `paginate` is `'iterator'`) */
    accumulator?: string;
    /** @description Where the cursor is passed in requests; defaults to `'payload'` */
    type?: 'headers' | 'payload' | 'query';
    /** @description Paginate by default unless `paginate` is `false` */
    default?: 'enabled';
  }

  interface AwsLiteRequest {
    awsjson?: boolean | string[];
    /** @description Alias for "payload" */
    body?: Record<string, any> | Buffer | ReadableStream | string;
    /** @description Alias for "payload" */
    data?: Record<string, any> | Buffer | ReadableStream | string;
    headers?: Record<string, string>;
    host?: string;
    method?: string;
    /** @description Enable pagination (requires `paginator`); pass `'iterator'` to return an async iterator of pages */
    paginate?: boolean | 'iterator';
    paginator?: AwsLitePaginator;
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

  // Allow <plugin>-types to extend AwsLiteClient
  interface AwsLiteClient {
    (payload: AwsLiteRequest & { paginate: 'iterator' }): Promise<AsyncGenerator<AwsLiteResponse, void, undefined>>;
    (payload: AwsLiteRequest): Promise<AwsLiteResponse>;
  }

  interface AwsLiteBaseMock {
    method: string;
    time: string;
  }

  interface AwsLiteMockRequest extends AwsLiteBaseMock {
    request: any;
  }

  interface AwsLiteMockResponse extends AwsLiteBaseMock {
    response: any;
  }

  interface AwsLiteTesting {
    debug: (args?: { print?: boolean }) => any;
    disable: () => void;
    enable: (args?: { usePluginResponseMethod?: boolean }) => void;
    getAllRequests: (target?: string) => AwsLiteMockRequest[];
    getAllResponses: (target?: string) => AwsLiteMockResponse[];
    getLastRequest: (target?: string) => AwsLiteMockRequest;
    getLastResponse: (target?: string) => AwsLiteMockResponse;
    mock: (target: string, mock: any) => void;
    reset: () => void;
  }
}

declare const CreateAwsLite: {
  (config?: CreateAwsLite.AwsLiteConfig): Promise<CreateAwsLite.AwsLiteClient>;
  testing: CreateAwsLite.AwsLiteTesting;
}
export = CreateAwsLite;
