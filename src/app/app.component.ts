import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Service-Workers';

  constructor(public swUpdate: SwUpdate, public swPush: SwPush, public snackBar: MatSnackBar) {
    // swUpdate.available.subscribe(update2 => {
    //   console.log('update available');
    //
    //   const snack = snackBar.open('Update Available', 'Reload');
    //   snack.onAction().subscribe(() => {
    //     window.location.reload();
    //   });
    // });
    console.log('AppComponent=>WorkerService.checkForUpdates();');
    if (swUpdate.isEnabled) {
      interval(5000).subscribe(() => swUpdate.checkForUpdate()
        .then(() => console.log('Checking for Updates!')));
    }
    this.swUpdate.available.subscribe(event => {
      console.log('checkForUpdates()');
      console.log(event);
      this.promptUser(event);
    });
  }

  private promptUser(event): void {
    console.log('promptUser');
    console.log(event);
    const snackBarRef = this.snackBar.open(
      'A new version of the app is available',
      'Refresh',
      {horizontalPosition: 'left'}
    );
    console.log(snackBarRef);
    snackBarRef.onAction().subscribe(() =>
      this.swUpdate.activateUpdate().then(() => document.location.reload()));
  }
}
