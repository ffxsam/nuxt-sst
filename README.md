# Nuxt 3 + Serverless Stack

## ⚠️ Important Note ⚠️

Please do not open PRs without having a [discussion about it first](https://github.com/ffxsam/nuxt-sst/discussions/categories/pre-pr-discussions)!

## Project Structure

The [Serverless Stack](https://serverless-stack.com/) code lies at the root, while the Nuxt app lives in a Yarn workspace called "nuxt". Make sure to specify this workspace when adding/removing packages, e.g. `yarn workspace nuxt add lodash.chunk`.

The Nuxt app can, of course, access modules outside the workspace, which is incredibly useful. This means the Nuxt app is tightly integrated with your back-end stack and doesn't need to waste extra network bandwidth or hit additional cold starts by making API calls.

The `@` path alias can be used to import modules from the `src` folder in the Nuxt workspace, and the `$src` path alias should be used to access modules in the root level `src` folder.

## Working on the App

Run `yarn nuxt:dev` and work as you normally would. If you need the full stack running, run `yarn start` which will start up the SST stack. The first time you run this, it will deploy a couple of CloudFormation stacks (one for debugging and one with the actual infrastructure and code). Once you see output like this:

```
Stack dev-sst-vue-web-app
  Status: no changes
  Outputs:
    ApiEndpoint: https://xyz.execute-api.us-east-1.amazonaws.com
```

you can open that URL to access the Nuxt app. Thanks to the [magic of Serverless Stack](https://docs.serverless-stack.com/live-lambda-development), you can make local code changes and then reload the page. No deployment to AWS is necessary. Of course, keep in mind that any changes to the Nuxt app itself will require you to rebuild the Nuxt app via `yarn nuxt:build`.

## Build and Deploy

First, make sure your root-level `.env` file contains the S3 URL indicating where Nuxt's client-side assets should go, as well as the CDN URL. Then run:

```bash
yarn nuxt:build
```

Once the Nuxt app is built, you can run `yarn deploy --stage prod` to deploy the SST stack + the Nuxt app to production.

## To-do/Known Issues

- [ ] Set up CloudFront distribution in front of the HTTP API. For speed, and also a proper custom domain.
- [ ] Get source maps working, as in: they're in a place where they can be uploaded to Sentry (or some other error logging service) and *not* get bundled anywhere, wasting space.

## More Info

Learn more about the Serverless Stack.

- [Docs](https://docs.serverless-stack.com)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)
