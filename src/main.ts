import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

console.log('main.ts');
if (environment.production) {
  console.log('environment');
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('ngsw-worker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    }).catch(err => console.log(err));
  }
});

// import 'hammerjs';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
//   if ('serviceWorker' in navigator && environment.production) {
//     navigator.serviceWorker.register('/ngsw-worker.js');
//   }
// }).catch(err => console.log(err));
// console.log('main.ts');
// if (environment.production) {
//   console.log('environment');
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
