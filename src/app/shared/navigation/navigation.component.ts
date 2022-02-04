import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { TranslationService } from '../services/translation/translation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn: boolean = false;
  $isLoggedInSub: Subscription = new Subscription();
  displayName: string = "";

  constructor(private authService: AuthService, private router: Router, public t: TranslationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.$isLoggedInSub = this.authService.loginStatus().subscribe(
      result => {
        this.isLoggedIn = result;
        this.displayName = localStorage.getItem('displayName') ?? "";
      }
    );
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.router.navigateByUrl("/");
  }

  onLanguageChange(e: any) {
    this.t.switchLocale(e.value);
    window.location.reload();
  }

  compareFn(x: string, y: string): boolean {
    return x === y;
  }

}
