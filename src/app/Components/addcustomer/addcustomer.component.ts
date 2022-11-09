import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) { }
  customer: Customer = {
    customerNumber: 0,
    accountNumber: 0,
    branchId: 0,
    openingBalance: 0,
    accountOpeningDate: new Date(),
    accountType: '',
    accountStatus: true


  }




  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.addNewCustomerAccountDetails(this.customer).subscribe(response => {
      this.customer = {
        customerNumber: 0,
        accountNumber: 0,
        branchId: 0,
        openingBalance: 0,
        accountOpeningDate: new Date(),
        accountType: '',
        accountStatus: true
      }



    })

  }

}
