import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from "../../controls/controls.module";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ControlsModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
