import * as sst from '@serverless-stack/resources';

export default class WebAppStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, 'Api', {
      routes: {
        $default: new sst.Function(this, 'EntryPointFunc', {
          handler: 'nuxt/lambda.handler',
          environment: {
            NUXT_SOMETHING_SECRET: '', // reference properties in CDK constructs
          },
        }),
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
