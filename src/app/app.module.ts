import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseDialogComponent } from './base-dialog/base-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { ComplexDialogComponent } from './complex-dialog/complex-dialog.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { Routes, RouterModule } from "@angular/router";
import { DialogViewComponent } from './dialog-view/dialog-view.component';
import { ViewSelectComponent } from './view-select/view-select.component';
import { SharedViewComponent } from './shared-view/shared-view.component';
import { SaveCancelButtonsComponent } from './save-cancel-buttons/save-cancel-buttons.component';

const routes: Routes = [
    { path: 'dialogs', component: DialogViewComponent },
    { path: 'shared-state', component: SharedViewComponent },
    { path: '**', component: ViewSelectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BaseDialogComponent,
    ConfirmDialogComponent,
    InputDialogComponent,
    ComplexDialogComponent,
    DialogViewComponent,
    ViewSelectComponent,
    SharedViewComponent,
    SaveCancelButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
