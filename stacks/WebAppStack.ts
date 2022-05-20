import { Api, Function, StackContext } from '@serverless-stack/resources';

export function WebAppStack({ stack }: StackContext) {
  const api = new Api(stack, 'Api', {
    routes: {
      $default: new Function(stack, 'EntryPointFunc', {
        handler: 'nuxt/lambda.handler',
        environment: {
          NUXT_SOMETHING_SECRET: '', // reference properties in CDK constructs
        },
      }),
    },
  });

  // Show the endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
