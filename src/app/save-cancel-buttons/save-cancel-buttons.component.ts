import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-cancel-buttons',
  templateUrl: './save-cancel-buttons.component.html',
  styleUrls: ['./save-cancel-buttons.component.scss']
})
export class SaveCancelButtonsComponent {
  @Output()
  saveEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  cancelEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  resetEvent: EventEmitter<string> = new EventEmitter<string>();

  saveItem(): void {
    this.saveEvent.emit('save');
  }

  cancelItem(): void {
    this.cancelEvent.emit('cancel');
  }

  resetItem(): void {
      this.resetEvent.emit('reset');
  }
}
