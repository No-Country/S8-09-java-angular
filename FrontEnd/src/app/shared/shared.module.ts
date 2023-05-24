import { NgModule } from '@angular/core';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';

const shared=[
  
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatChipsModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatBadgeModule,
]
@NgModule({
  declarations: [],
  imports:shared,
  exports:shared
})
export class SharedModule { }