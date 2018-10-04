import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(public updates: SwUpdate, public snackBar: MatSnackBar) {
    if (updates.isEnabled) {
      interval( 6000).subscribe(() => updates.checkForUpdate()
        .then(() => console.log('Checking for Updates!')));
    }
  }

  public checkForUpdates() {
    this.updates.available.subscribe(event => this.promptUser(event));
  }

  private promptUser(event: any): void {
    console.log(event);
    const snackBarRef = this.snackBar.open(
      'A new version of the app is available',
      'Refresh',
      {horizontalPosition: 'left'}
    );
    snackBarRef.onAction().subscribe(() =>
      this.updates.activateUpdate().then(() => window.location.reload()));
  }
}
