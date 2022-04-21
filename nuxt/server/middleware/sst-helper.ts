/**
 * This is needed when running `sst start`, so client-side assets can be loaded.
 */
import fs from 'fs';

export default function sstHelper(event) {
  if (process.env.IS_LOCAL) {
    const matches = event.url.match(/^\/_nuxt\/(.*)/);

    if (matches) {
      const contents = fs.readFileSync(
        `nuxt/.output/public/_nuxt/${matches[1]}`,
        {
          encoding: 'utf8',
        }
      );
      let mimeType: string;

      if (/\.m?js$/.test(event.url)) {
        mimeType = 'application/javascript';
      } else if (/\.css$/.test(event.url)) {
        mimeType = 'text/css';
      } else {
        mimeType = 'text/html';
      }

      event.res.setHeader('Content-Type', mimeType);
      return contents;
    }
  }
}
