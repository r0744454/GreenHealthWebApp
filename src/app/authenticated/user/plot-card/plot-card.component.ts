import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Plot } from 'src/app/shared/models/Plot';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';

@Component({
  selector: 'app-plot-card',
  templateUrl: './plot-card.component.html',
  styleUrls: ['./plot-card.component.scss']
})
export class PlotCardComponent implements OnInit {
  @Input() plot: Plot = {id: 0, organisationId: 0, location: ""}

  constructor(public t: TranslationService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateDetail() {
    this.router.navigateByUrl("/user/plots/"+this.plot.id);
  }

}
