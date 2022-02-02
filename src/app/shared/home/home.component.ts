import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { TranslationService } from '../services/translation/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;
  $isLoggedInSub: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router, public t: TranslationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.$isLoggedInSub = this.authService.loginStatus().subscribe(
      result => {
        this.isLoggedIn = result;
      }
    );
  }

}
