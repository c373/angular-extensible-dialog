import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-input-dialog',
    templateUrl: './input-dialog.component.html',
    styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent {
    onSend(): void {
        this.data.confirm = true;
    }

    onCancel(): void {
        this.data.confirm = false;
    }

    constructor(public dialogRef: MatDialogRef<InputDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: InputDialogData) {}
}

interface InputDialogData {
    confirm: boolean;
    input: string;
}
