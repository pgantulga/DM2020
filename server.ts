
import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as cors from 'cors';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// export function app(): express.Express {
//   console.log('started express');
//   const router =  express.Router();
//   const server = express();
//   const distFolder = join(process.cwd(), 'dist/DM2020/browser');
//   const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
//   const options: cors.CorsOptions = {
//     allowedHeaders: [
//       'Origin',
//       'X-Requested-With',
//       'Content-Type',
//       'Accept',
//       'X-Access-Token',
//     ],
//     credentials: true,
//     methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//     origin: 'https://m.egolomt.mn/billingnew/cardinfo.aspx',
//     preflightContinue: false,
//   };
//   router.use(cors(options));
//   router.options('*', cors(options));
//   // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
//   server.engine('html', ngExpressEngine({
//     bootstrap: AppServerModule,
//   }));
//
//   server.set('view engine', 'html');
//   server.set('views', distFolder);
//
//   // Example Express Rest API endpoints
//   // server.get('/api/**', (req, res) => { });
//   // Serve static files from /browser
//   server.get('*.*', express.static(distFolder, {
//     maxAge: '1y'
//   }));
//
//   // All regular routes use the Universal engine
//   server.get('*', (req, res) => {
//     res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
//   });
//
//   return server;
// }
// function run(): void {
//   const port = process.env.PORT || 4000;
//
//   // Start up the Node server
//   const server = app();
//   server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }
//
// declare const __non_webpack_require__: NodeRequire;
// const mainModule = __non_webpack_require__.main;
// const moduleFilename = mainModule && mainModule.filename || '';
// if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
//   run();
// }
//
//
//
// export * from './src/main.server';
