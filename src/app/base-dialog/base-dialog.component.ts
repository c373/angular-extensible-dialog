import { Component, Input } from '@angular/core';

interface DialogData {
    result: boolean;
}

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})
export class BaseDialogComponent {
    @Input()
    title!: string;
}

