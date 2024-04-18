import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fee } from '../../../Models/Fee';
import { Standard } from '../../../Models/Standard';
import { FeeType } from '../../../Models/FeeType';
import { FeeService } from '../../../Services/fee.service';
import { CommonServices } from '../../../Services/common.service';

@Component({
  selector: 'app-fee-edit',
  templateUrl: './fee-edit.component.html',
  styleUrl: './fee-edit.component.css'
})
export class FeeEditComponent implements OnInit {
  public fee: Fee = new Fee();
  public feeId!: number;
  public frequencies: string[] = [];
  public standards: Standard[] = [];
  public feeTypes: FeeType[] = [];
  constructor(private feeService: FeeService, private commonService: CommonServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.feeId = +params['id'];
      this.getFeeDetails(this.feeId);
    });
    
    this.loadStandards();
    this.loadFeeTypes();
    this.loadFrequencyEnum();

  }
  getFeeDetails(id: number): void {
    this.feeService.getFeeById(id).subscribe(
      (data: Fee) => {
        this.fee = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  loadFrequencyEnum() {
    this.commonService.getFrequencyEnum().subscribe((data: string[]) => {
      this.frequencies = data;
    });
  }

  loadFeeTypes() {
    this.commonService.getAllFeeType().subscribe(feeTypes => {
      this.feeTypes = feeTypes;
    });
  }

  loadStandards() {


    this.commonService.getAllStandards().subscribe(standards => {
      this.standards = standards;
    });
  }
  onSubmit(): void {
    this.feeService.updateFee(this.fee).subscribe(
      () => {
        this.router.navigate(['/fees']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
