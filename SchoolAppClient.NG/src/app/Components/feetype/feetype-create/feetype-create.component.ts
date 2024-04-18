import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeType } from '../../../Models/FeeType';
import { FeeTypeService } from '../../../Services/fee-type.service';

@Component({
  selector: 'app-feetype-create',
  templateUrl: './feetype-create.component.html',
  styleUrl: './feetype-create.component.css'
})
export class FeetypeCreateComponent implements OnInit {

 public feeType: FeeType = new FeeType;


  constructor(private feeTypeService: FeeTypeService, private router: Router) { }

  ngOnInit(): void {

  }

  createFeeType(): void {
    this.feeTypeService.createFeeType(this.feeType).subscribe(() => {
      // After successful creation, navigate back to fee type list
      this.router.navigate(['/fee-types']);
    });
  }

}


