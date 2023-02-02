import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-complex-dialog',
  templateUrl: './complex-dialog.component.html',
  styleUrls: ['./complex-dialog.component.scss']
})
export class ComplexDialogComponent {
    onOk(): void {
        this.data.confirm = true;
    }

    onMaybe(): void {
        this.data.confirm = undefined;
    }

    onNo(): void {
        this.data.confirm = false;
    }

    constructor(public dialogRef: MatDialogRef<ComplexDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ComplexDialogData) {}
}

interface ComplexDialogData {
    confirm: boolean | undefined;
    input: string;
}
