import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public t: TranslationService) { }

  ngOnInit(): void {
  }

}
