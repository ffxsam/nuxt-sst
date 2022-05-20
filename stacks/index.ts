import * as sst from '@serverless-stack/resources';
import { WebAppStack } from './WebAppStack';

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
  });

  app.stack(WebAppStack, { stackName: `${app.stage}-${app.name}-web-app` });

  // Add more stacks
}
