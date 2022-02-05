import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recomended-points-dialog',
  templateUrl: './recomended-points-dialog.component.html',
})
export class RecomendedPointsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {}
}
