import {Component, ApplicationRef, OnInit} from '@angular/core';
import {LogUpdateService} from './log-update.service';
import {CheckForUpdateService} from './check-for-update.service';
import {PromptUpdateService} from './prompt-update.service';
import {WorkerService} from './worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Service-Workers';

  constructor(public sw: WorkerService) {
    this.sw.checkForUpdates();

    // if ('serviceWorker' in navigator) {
    //   window.addEventListener('load', function () {
    //     navigator.serviceWorker.register('/ngsw-worker.js').then(function (registration) {
    //       // Registration was successful
    //       console.log('ServiceWorker registration successful with scope: ', registration.scope);
    //     }, function (err) {
    //       // registration failed :(
    //       console.log('ServiceWorker registration failed: ', err);
    //     });
    //   });
    // }
  }

  // ngOnInit() {
  //
  //   // this.applicationRef.isStable.subscribe((s) => { // #1
  //   //   if (s) { // #2
  //   //     setInterval(t => { console.log('Ping')}, 500);
  //   //   } // #3
  //   // }); // #4
  //   // // If you uncomment 1-4 - service-worker will not run
  //
  //   this.applicationRef.isStable.subscribe(t => {
  //     console.log('App stable: ' + t);
  //   });
  // }
}
