import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Plot } from 'src/app/shared/models/Plot';
import { PlotService } from 'src/app/shared/services/plot/plot.service';

@Component({
  selector: 'app-plot-overview',
  templateUrl: './plot-overview.component.html',
  styleUrls: ['./plot-overview.component.scss']
})
export class PlotOverviewComponent implements OnInit {

  plots: Plot[] = new Array<Plot>();
  $plot: Subscription = new Subscription();

  constructor(private plotService: PlotService) { }

  ngOnInit(): void {
    this.$plot = this.plotService.getPlots().subscribe(r => {
      this.plots = r;
    });
  }



}
