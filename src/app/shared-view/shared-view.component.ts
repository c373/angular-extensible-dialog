import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-view',
  templateUrl: './shared-view.component.html',
  styleUrls: ['./shared-view.component.scss']
})
export class SharedViewComponent {
  state: string = 'help';
  color: string = 'primary';

  onSave(event: string): void {
    console.log(event);
    this.state = 'check';
    this.color = 'primary';
  }

  onCancel(event: string): void {
    console.log(event);
    this.state = 'close';
    this.color = 'warn';
  }

  onReset(event: string): void {
    console.log(event);
    this.state = 'help';
    this.color = 'primary';
  }
}
