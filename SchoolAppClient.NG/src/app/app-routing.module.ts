import { NgModule } from '@angular/core';
import { MarksListComponent } from './Components/marks/marks-list/marks-list.component';
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
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsPerStudentComponent } from './Components/PaymentDetails/payment-details-per-student/payment-details-per-student.component';

const routes: Routes = [
  { path: "", redirectTo: "/marksList", pathMatch: "full" },
  { path: "marksList", component: MarksListComponent },
  { path: 'marks/add', component: MarksAddComponent },
  { path: 'marks/edit/:id', component: MarksEditComponent },
  { path: "marks/delete/:id", component: MarksDeleteComponent },

  { path: 'fee-types', component: FeetypeListComponent },
  { path: 'fee-types/create', component: FeetypeCreateComponent },
  { path: 'fee-types/:id/edit', component: FeetypeEditComponent },

  { path: 'fees', component: FeeListComponent },
  { path: 'fees/create', component: FeeCreateComponent },
  { path: 'fees/:id/edit', component: FeeEditComponent },

  { path: 'monthlypayment', component: MonthlypaymentListComponent },
  { path: 'monthlypayment/create', component: MonthlypaymentCreatComponent },
  { path: 'monthlypayment/:id/edit', component: MonthlypaymentEditComponent },
  { path: 'monthlypayment/:id/details', component: MonthlypaymentDetailsComponent },


  { path: 'maymentdetails', component: PaymentDetailsPerStudentComponent },

  /*{ path: '', redirectTo: '/fee-types', pathMatch: 'full' },*/
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
