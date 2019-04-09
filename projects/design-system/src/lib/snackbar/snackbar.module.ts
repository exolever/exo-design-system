import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { ExOSnackbarService } from './snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  exports: [
    MatSnackBarModule,
  ],
  providers: [
    ExOSnackbarService,
  ],
})
export class ExOSnackbarModule {}
