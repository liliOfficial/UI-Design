import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/layout/header/header.component';
import { FooterComponent } from './view/layout/footer/footer.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LeadsComponent } from './view/leads/leads/leads.component';
import { PanelComponent } from './UI/panel/panel.component';
import { TableComponent } from './UI/table/table.component';
import { AccountsComponent } from './view/accounts/accounts/accounts.component';
import { ReportsComponent } from './view/reports/reports/reports.component';
import { OpportunitiesComponent } from './view/opportunities/opportunities/opportunities.component';
import { ButtonComponent } from './UI/button/button.component';
import { InputComponent } from './UI/form/input/input.component';
import { InputLineComponent } from './UI/form/input-line/input-line.component';
import { SelectComponent } from './UI/form/select/select.component';
import { SelectLineComponent } from './UI/form/select-line/select-line.component';
import { DropdownComponent } from './UI/dropdown/dropdown.component';
import { DragDropComponent } from './UI/drag-drop/drag-drop.component';
import { TabComponent } from './UI/tab/tab.component';
import { CheckboxRadioComponent } from './UI/checkbox-radio/checkbox-radio.component';
import { TableListComponent } from './UI/table-list/table-list.component';
import { LeadDetailComponent } from './view/leads/lead-detail/lead-detail.component';
import { AttachmentsComponent } from './view/common/attachment/attachments/attachments.component';
import { CommonComponent } from './view/common/common/common.component';
import { LogsComponent } from './view/common/log/logs/logs.component';
import { TaskOpenComponent } from './view/common/task/task-open/task-open.component';
import { TaskHistoryComponent } from './view/common/task/task-history/task-history.component';
import { EmailSentComponent } from './view/common/email/email-sent/email-sent.component';
import { AccountDetailComponent } from './view/accounts/account-detail/account-detail.component';
import { LeadsNewViewComponent } from './view/leads/leads-new-view/leads-new-view.component';
import { TaskEditComponent } from './view/common/task/task-edit/task-edit.component';
import { ConvertComponent } from './view/leads/convert/convert.component';
import { FindDuplicationsComponent } from './view/leads/find-duplications/find-duplications.component';
import { MergeLeadsComponent } from './view/leads/merge-leads/merge-leads.component';
import { SetupNavComponent } from './view/setup/setup-nav/setup-nav.component';
import { CompanyInformationComponent } from './view/setup/company/company-information/company-information.component';
import { SearchComponent } from './view/common/search/search.component';
import { OrganisationalChartComponent } from './view/setup/company/organisational-chart/organisational-chart.component';
import { PermissionProfileComponent } from './view/setup/company/permission-profile/permission-profile.component';
import { DepartmentsComponent } from './view/common/department/departments/departments.component';
import { UsersComponent } from './view/setup/company/users/users/users.component';
import { UserDetailComponent } from './view/setup/company/users/user-detail/user-detail.component';
import { DepartmentCallbackComponent } from './view/common/department/department-callback/department-callback.component';
import { OrganisationCallbackComponent } from './view/setup/company/organisation-callback/organisation-callback.component';
import { LeadsFieldsComponent } from './view/setup/leads/leads-fields/leads-fields.component';
import { LeadsPageLayoutComponent } from './view/setup/leads/leads-page-layout/leads-page-layout.component';
import { FieldEditComponent } from './view/setup/leads/field-edit/field-edit.component';
import { LeadsEditLayoutComponent } from './view/setup/leads/leads-edit-layout/leads-edit-layout.component';
import { FieldNewComponent } from './view/setup/leads/field-new/field-new.component';
import { FieldValueEditComponent } from './view/setup/leads/field-value-edit/field-value-edit.component';
import { LoginComponent } from './view/user/login/login.component';
import { SettingComponent } from './view/user/setting/setting.component';
import { NewEmailComponent } from './view/common/email/new-email/new-email.component';
import { OpportunityDetailComponent } from './view/opportunities/opportunity-detail/opportunity-detail.component';
import { OpportunitiesAccountComponent } from './view/opportunities/opportunities-account/opportunities-account.component';
import { LeadsPageLayoutAssignmentComponent } from './view/setup/leads/leads-page-layout-assignment/leads-page-layout-assignment.component';
import { LeadsPageLayoutAssignmentCallbackComponent } from './view/setup/leads/leads-page-layout-assignment-callback/leads-page-layout-assignment-callback.component';


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
    SelectComponent,
    SelectLineComponent,
    DropdownComponent,
    DragDropComponent,
    TabComponent,
    CheckboxRadioComponent,
    TableListComponent,
    LeadDetailComponent,
    AttachmentsComponent,
    CommonComponent,
    LogsComponent,
    TaskOpenComponent,
    TaskHistoryComponent,
    EmailSentComponent,
    AccountDetailComponent,
    LeadsNewViewComponent,
    TaskEditComponent,
    ConvertComponent,
    FindDuplicationsComponent,
    MergeLeadsComponent,
    SetupNavComponent,
    CompanyInformationComponent,
    SearchComponent,
    UsersComponent,
    UserDetailComponent,
    OrganisationalChartComponent,
    PermissionProfileComponent,
    DepartmentsComponent,
    DepartmentCallbackComponent,
    OrganisationCallbackComponent,
    LeadsFieldsComponent,
    LeadsPageLayoutComponent,
    FieldEditComponent,
    LeadsEditLayoutComponent,
    FieldNewComponent,
    FieldValueEditComponent,
    LoginComponent,
    SettingComponent,
    NewEmailComponent,
    OpportunityDetailComponent,
    OpportunitiesAccountComponent,
    LeadsPageLayoutAssignmentComponent,
    LeadsPageLayoutAssignmentCallbackComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/setting', component: SettingComponent },
      { path: 'leads', component: LeadsComponent },
      { path: 'leads/lead-detail/:id', component: LeadDetailComponent },
      { path: 'leads/view-detail/:id', component: LeadsNewViewComponent },
      { path: 'leads/convert', component: ConvertComponent },
      { path: 'leads/find-duplications', component: FindDuplicationsComponent },
      { path: 'leads/merge-leads', component: MergeLeadsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'accounts/account-detail', component: AccountDetailComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'opportunities/opportunity-detail/:id', component: OpportunityDetailComponent },
      { path: 'task', component: TaskEditComponent },
      { path: 'search', component: SearchComponent },
      { path: 'setup/company', component: CompanyInformationComponent },
      { path: 'setup/company/users', component: UsersComponent },
      { path: 'setup/company/user-detail/:id', component: UserDetailComponent },
      { path: 'setup/company/organisational-chart', component: OrganisationalChartComponent },
      { path: 'setup/company/premission-profile', component: PermissionProfileComponent },
      { path: 'setup/leads/fields', component: LeadsFieldsComponent },
      { path: 'setup/leads/page-layout', component: LeadsPageLayoutComponent },
      { path: 'setup/leads/field-new', component: FieldNewComponent },
      { path: 'setup/leads/field-edit', component: FieldEditComponent },
      { path: 'setup/leads/field-value-edit', component: FieldValueEditComponent },
      { path: 'setup/leads/edit-layout', component: LeadsEditLayoutComponent },
      { path: 'setup/leads/edit-layout-assignment', component: LeadsPageLayoutAssignmentComponent },
      { path: 'setup/email', component: NewEmailComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
