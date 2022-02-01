import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  defaultPlot: Plot = {id: 0, organisationId: 0, location: ""};

  formError: boolean = false;

  constructor(private plotService: PlotService) { }

  ngOnInit(): void {
    var ts = localStorage.getItem("defaultPlot");
    if(ts != null) {
      this.defaultPlot = JSON.parse(ts);
    }
    this.$plot = this.plotService.getPlots().subscribe(r => {
      this.plots = r;
    });
  }

  onSubmitNew(f: NgForm) {
    if(f.value.plotName == null || f.value.plotName == "") {
      this.formError = true;
      return;
    }
    var toPost: Plot = {id: 0, organisationId: 0, location: f.value.plotName}
    this.plotService.postPlot(toPost).subscribe(r => {
      this.plots.push(r);
      if(this.defaultPlot.id == 0) {
        this.defaultPlot = r;
      }
    })
    this.formError = false;
    f.resetForm();
  }

  onSubmitDefault(f: NgForm) {
    this.defaultPlot = f.value.defaultPlot;
    localStorage.setItem("defaultPlot", JSON.stringify(f.value.defaultPlot));
  }

  compareFn(x: Plot, y: Plot): boolean {
    return x.id == y.id;
  }

}
