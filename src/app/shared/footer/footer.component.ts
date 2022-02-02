import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public t: TranslationService) { }

  ngOnInit(): void {
  }

}
