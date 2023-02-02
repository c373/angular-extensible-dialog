import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplexDialogComponent } from './complex-dialog/complex-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    eState: typeof State = State;
    state: State = State.Pending;
    color: Color = Color[this.state];
    userInput: string = '';
  
  openConfirm(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        if (result) {
            this.setConfirmState();
        }
        else {
            this.setCancelState();
        }

        this.userInput = '';
    });
  }

  openInput(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, { data: { confirm: '', input: ''} });
    dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        if (result.confirm) {
            this.setConfirmState();
            this.userInput = result.input;
        }
        else {
            this.setCancelState();
        }
    });
  }

  openComplex(): void {
    const dialogRef = this.dialog.open(ComplexDialogComponent, { data: { confirm: undefined, input: '' } });
    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result.confirm === undefined) {
            this.setUndefinedState();
            this.userInput = result.input;
        }
        else if (result.confirm) {
            this.setConfirmState();
            this.userInput = result.input;
        }
        else if (!result.confirm) {
            this.setCancelState();
            this.userInput = '';
        }
    });
  }

  setConfirmState(): void {
      this.state = State.Confirm;
      this.setColor();
  }

  setPendingState(): void {
      this.state = State.Pending;
      this.setColor();
  }

  setCancelState(): void {
      this.state = State.Cancel;
      this.setColor();
  }

  setUndefinedState(): void {
      this.state = State.Undefined;
      this.setColor();
  }

  setColor(): void {
      this.color = Color[this.state];
  }

  reset(): void {
      this.setPendingState();
      this.setColor();
      this.userInput = '';
  }

  constructor(public dialog: MatDialog) {
  }
}

enum State {
    Confirm = 'check_mark',
    Cancel = 'close',
    Pending = 'help',
    Undefined = 'error'
}

enum Color {
    check_mark = 'primary',
    close = 'warn',
    help = 'primary',
    error = 'accent'
}
