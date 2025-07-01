import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ControlsModule } from '../controls/controls.module';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: IndexComponent,
    children: [
      { path: "crm", loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule) },
      { path: "charts", loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
      { path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: "reports", loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }
    ]
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ControlsModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
