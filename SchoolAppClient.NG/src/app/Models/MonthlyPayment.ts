import { AcademicMonth } from "./AcademicMonth";
import { DueBalance } from "./DeuBalance";
import { Fee } from "./Fee";
import { PaymentMonth } from "./PaymentDetail";
import { PaymentDetail } from "./PaymentMonth";
import { Student } from "./Student";

export class MonthlyPayment {
  monthlyPaymentId!: number;
  studentId!: number;
  totalFeeAmount!: number;
  waver!: number;
  previousDue!: number;
  totalAmount!: number;
  amountPaid!: number;
  amountRemaining!: number;
  paymentDate: Date = new Date();
  student!: Student;

  //feeStructures: { feeStructureId: number }[] = [];

  fees: {feeId:number}[]=[];
  academicMonths: { monthId : number}[] = [];


  paymentMonths: PaymentMonth[]=[];

  paymentDetails: PaymentDetail[]=[];
  dueBalances: DueBalance[] = [];
  /*  balanceSheet: BalanceSheet[]=[];*/
}
