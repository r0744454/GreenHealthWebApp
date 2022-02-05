import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {id: 0, email: "", firstName: "", lastName: "", password: "", address: "", isAdmin: false}

  isSubmitted: boolean = false;
  isError: boolean = false;

  constructor(public t: TranslationService, private as: AuthService, private r: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isError = false;
    this.isSubmitted = true;
    if(!this.areInputsValid()) {
      this.isError = true;
      this.isSubmitted = false;
      return;
    }

    this.as.register(this.user).subscribe(
      r => {
        localStorage.setItem('token', r.token);
        localStorage.setItem('id', r.user.id.toString());
        localStorage.setItem('displayName', (r.user.firstName ?? r.user.email) + ' ' + r.user.lastName);
        this.r.navigate(['']);
      }, e => {
        this.isSubmitted = false;
      }
    );
  }

  areInputsValid(): boolean {
    return !(
      this.user.email === "" ||
      this.user.password === "" ||
      this.user.lastName === "" ||
      this.user.firstName === "" ||
      this.user.address === ""
    );
  } 

}
