import { AddAccountService } from './../add-account.service';
import { Acctsubmissions } from './../acctsubmissions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-account-form',
  templateUrl: './add-account-form.component.html',
  styleUrls: ['./add-account-form.component.css']
})
export class AddAccountFormComponent implements OnInit {

  submissions: Acctsubmissions = new Acctsubmissions();
  msg : string;

  constructor(private service:AddAccountService) { }

  ngOnInit() {
  }

  submit(f){
      this.msg="";
      console.log('component User ID '+this.submissions.userName);
      //this.service.addAccount(this.submissions);
       this.msg ="Account Sucussfully Added 2----";
     // this.service.addAccount(this.submissions).subscribe( data => {     
      //this.accountBalance = data.json();
      //this.msg ="Account Sucussfully Added----";
      //console.log("After add in component call-response --"+data.json);

    //});

  }
}