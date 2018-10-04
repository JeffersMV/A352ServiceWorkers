import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(public swUpdate: SwUpdate, public snackBar: MatSnackBar) {
    if (swUpdate.isEnabled) {
      interval( 5000).subscribe(() => swUpdate.checkForUpdate()
        .then(() => console.log('Checking for Updates!')));
    }
  }

  public checkForUpdates() {
    this.swUpdate.available.subscribe(event => {
      console.log('checkForUpdates()');
      console.log(event);
      this.promptUser(event);
    });
  }

  private promptUser(event: any): void {
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
