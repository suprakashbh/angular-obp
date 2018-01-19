import { AccountsBalanceService } from './../accounts-balance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accounts-component',
  templateUrl: './accounts-component.component.html',
  styleUrls: ['./accounts-component.component.css']
})
export class AccountsComponentComponent implements OnInit {
  accountBalance : any[];

  constructor(service:AccountsBalanceService) { 
     service.getAccountBalance().subscribe( data => {     
      this.accountBalance = data.json();
      console.log(this.accountBalance);
    });

  }

  refreshAccountData(){
    console.log("-----In refresh Data----");
  }

  ngOnInit() {
  }

}
