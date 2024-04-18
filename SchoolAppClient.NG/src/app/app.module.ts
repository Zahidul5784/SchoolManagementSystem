import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksListComponent } from './Components/marks/marks-list/marks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksAddComponent } from './Components/marks/marks-add/marks-add.component';
import { MarksEditComponent } from './Components/marks/marks-edit/marks-edit.component';
import { MarksDeleteComponent } from './Components/marks/marks-delete/marks-delete.component';
import { FeetypeListComponent } from './Components/feetype/feetype-list/feetype-list.component';
import { FeetypeCreateComponent } from './Components/feetype/feetype-create/feetype-create.component';
import { FeetypeEditComponent } from './Components/feetype/feetype-edit/feetype-edit.component';
import { FeeListComponent } from './Components/fee/fee-list/fee-list.component';
import { FeeCreateComponent } from './Components/fee/fee-create/FeeCreateComponent';
import { FeeEditComponent } from './Components/fee/fee-edit/fee-edit.component';
import { MonthlypaymentListComponent } from './Components/monthlypayment/monthlypayment-list/monthlypayment-list.component';
import { MonthlypaymentCreatComponent } from './Components/monthlypayment/monthlypayment-creat/monthlypayment-creat.component';
import { MonthlypaymentEditComponent } from './Components/monthlypayment/monthlypayment-edit/monthlypayment-edit.component';
import { MonthlypaymentDetailsComponent } from './Components/monthlypayment/monthlypayment-details/monthlypayment-details.component';
import { OtherpaymentListComponent } from './Components/otherpayment/otherpayment-list/otherpayment-list.component';
import { OtherpaymentCreatComponent } from './Components/otherpayment/otherpayment-creat/otherpayment-creat.component';
import { OtherpaymentEditComponent } from './Components/otherpayment/otherpayment-edit/otherpayment-edit.component';
import { OtherpaymentDetailsComponent } from './Components/otherpayment/otherpayment-details/otherpayment-details.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';
import { DepartmentCreateComponent } from './Components/department/department-create/department-create.component';
import { PaymentDetailsPerStudentComponent } from './Components/PaymentDetails/payment-details-per-student/payment-details-per-student.component';

@NgModule({
  declarations: [
    AppComponent,    
    MarksListComponent, MarksAddComponent, MarksEditComponent, MarksDeleteComponent,
   
    FeetypeListComponent,
    FeetypeCreateComponent,
    FeetypeEditComponent,
    FeeListComponent,
    FeeCreateComponent,
    FeeEditComponent,
    MonthlypaymentListComponent,
    MonthlypaymentEditComponent,
    MonthlypaymentCreatComponent,
    MonthlypaymentDetailsComponent,
    OtherpaymentListComponent,
    OtherpaymentCreatComponent,
    OtherpaymentEditComponent,
    OtherpaymentDetailsComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentCreateComponent,
    PaymentDetailsPerStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
