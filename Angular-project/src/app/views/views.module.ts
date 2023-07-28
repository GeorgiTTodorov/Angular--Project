import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    CollectionComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
