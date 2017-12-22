import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LeadsComponent } from './view/leads/leads.component';
import { PanelComponent } from './UI/panel/panel.component';
import { TableComponent } from './UI/table/table.component';
import { AccountsComponent } from './view/accounts/accounts/accounts.component';
import { ReportsComponent } from './view/reports/reports/reports.component';
import { OpportunitiesComponent } from './view/opportunities/opportunities/opportunities.component';
import { ButtonComponent } from './UI/button/button.component';
import { InputComponent } from './UI/form/input/input.component';
import { InputLineComponent } from './UI/form/input-line/input-line.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LeadsComponent,
    PanelComponent,
    TableComponent,
    AccountsComponent,
    ReportsComponent,
    OpportunitiesComponent,
    ButtonComponent,
    InputComponent,
    InputLineComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leads', component: LeadsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'opportunities', component: OpportunitiesComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }