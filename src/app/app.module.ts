import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { AccountsNewViewComponent } from './view/accounts/accounts-new-view/accounts-new-view.component';
import { OpportunitiesNewViewComponent } from './view/opportunities/opportunities-new-view/opportunities-new-view.component';
import { FundDuplicationsComponent } from './view/accounts/fund-duplications/fund-duplications.component';
import { DeleteWarningComponent } from './view/common/delete-warning/delete-warning.component';
import { TemplatesComponent } from './view/setup/email/templates/templates.component';
import { NewTemplateComponent } from './view/setup/email/new-template/new-template.component';
import { PaginationComponent } from './view/common/pagination/pagination.component';
import { FolderPermissionComponent } from './view/setup/email/folder-permission/folder-permission.component';
import { AttachmentDetailComponent } from './view/common/attachment/attachment-detail/attachment-detail.component';
import { FolderTemplatesComponent } from './view/setup/email/folder-templates/folder-templates.component';
import { FoldersComponent } from './view/setup/email/folders/folders.component';
import { FolderComponent } from './view/common/email/folder/folder.component';
import { MyEmailTemplateComponent } from './view/common/email/my-email-template/my-email-template.component';
import { CampaignsComponent } from './view/setup/email/campaigns/campaigns.component';
import { NewReportComponent } from './view/reports/new-report/new-report.component';
import { EidtCampaignComponent } from './view/setup/email/eidt-campaign/eidt-campaign.component';
import { SubscriberListComponent } from './view/setup/email/subscriber-list/subscriber-list.component';
import { NewSubscriberComponent } from './view/setup/email/new-subscriber/new-subscriber.component';

import { FilterService } from './service/filter.service';
import { SubscribersComponent } from './view/setup/email/subscribers/subscribers.component';
import { UnsubscribersComponent } from './view/setup/email/unsubscribers/unsubscribers.component';
import { FileFolderComponent } from './view/setup/files/file-folder/file-folder.component';
import { FileFolderEditComponent } from './view/setup/files/file-folder-edit/file-folder-edit.component';
import { UserFilesComponent } from './view/setup/files/user-files/user-files.component';
import { NewDashboardComponent } from './view/reports/new-dashboard/new-dashboard.component';
import { GenerateReportComponent } from './view/reports/generate-report/generate-report.component';
import { ReportsShareComponent } from './view/reports/reports-share/reports-share.component';
import { TasksComponent } from './view/common/tasks/tasks.component';


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
    AccountsNewViewComponent,
    OpportunitiesNewViewComponent,
    FundDuplicationsComponent,
    DeleteWarningComponent,
    TemplatesComponent,
    NewTemplateComponent,
    PaginationComponent,
    FolderPermissionComponent,
    AttachmentDetailComponent,
    FolderTemplatesComponent,
    FoldersComponent,
    FolderComponent,
    MyEmailTemplateComponent,
    CampaignsComponent,
    NewReportComponent,
    EidtCampaignComponent,
    SubscriberListComponent,
    NewSubscriberComponent,
    SubscribersComponent,
    UnsubscribersComponent,
    FileFolderComponent,
    FileFolderEditComponent,
    UserFilesComponent,
    NewDashboardComponent,
    GenerateReportComponent,
    ReportsShareComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/setting', component: SettingComponent },
      { path: 'user/folder', component: FolderComponent },
      { path: 'user/email-template', component: MyEmailTemplateComponent },
      { path: 'leads', component: LeadsComponent },
      { path: 'leads/lead-detail/:id', component: LeadDetailComponent },
      { path: 'leads/view-detail/:id', component: LeadsNewViewComponent },
      { path: 'leads/convert', component: ConvertComponent },
      { path: 'leads/find-duplications', component: FindDuplicationsComponent },
      { path: 'leads/merge-leads', component: MergeLeadsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'accounts/account-detail', component: AccountDetailComponent },
      { path: 'accounts/view-detail/:id', component: AccountsNewViewComponent },
      { path: 'accounts/find-duplications', component: FundDuplicationsComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'opportunities/opportunity-detail/:id', component: OpportunityDetailComponent },
      { path: 'opportunities/view-detail/:id', component: OpportunitiesNewViewComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'reports/new-reports/:type', component: NewReportComponent },
      { path: 'reports/new-dashboard', component: NewDashboardComponent },
      { path: 'task', component: TaskEditComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'search', component: SearchComponent },
      { path: 'attachment', component: AttachmentDetailComponent },
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
      { path: 'setup/email/templates', component: TemplatesComponent },
      { path: 'setup/email/new-template', component: NewTemplateComponent },
      { path: 'setup/email/campaigns', component: CampaignsComponent },
      { path: 'setup/email/edit-campaigns', component: EidtCampaignComponent },
      { path: 'setup/email/subscriber-list', component: SubscriberListComponent },
      { path: 'setup/email/new-subscriber', component: NewSubscriberComponent },
      { path: 'setup/email/subscribers', component: SubscribersComponent },
      { path: 'setup/email/unsubscribers', component: UnsubscribersComponent },
      { path: 'setup/files/folders', component: FileFolderComponent },
      { path: 'setup/files/folder-edit', component: FileFolderEditComponent },
      { path: 'setup/files/user-files', component: UserFilesComponent },
    ])
  ],
  providers: [
    FilterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
