import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatDialogModule,
  MatExpansionModule,
  MatTabsModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSliderModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})

export class MaterialModule {
}
