import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Plant } from 'src/app/shared/models/Plant';
import { Plot } from 'src/app/shared/models/Plot';
import { PlotService } from 'src/app/shared/services/plot/plot.service';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.scss']
})
export class PlotDetailComponent implements OnInit {

  $plot: Subscription = new Subscription();
  plot: Plot = {id: 0, organisationId: 0, location: ""}

  $plants: Subscription = new Subscription();
  accessiblePlants: Plant[] = new Array<Plant>();
  $accessiblePlants: Subscription = new Subscription();
  plants: Subject<Plant[]> = new Subject<Plant[]>();
  $sortedPlants: Observable<Plant[]> = this.plants.asObservable();
  sortLowToHigh = true;

  constructor(public t: TranslationService, private plotService: PlotService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.$accessiblePlants = this.$sortedPlants.subscribe(
      r => {
        this.accessiblePlants = r;
      }
    )

    const plotId = parseInt(this.route.snapshot.paramMap.get('id') ?? "0");
    this.$plot = this.plotService.getPlot(plotId).subscribe(
      r => {
        this.plot = r;
        this.$plants = this.plotService.getPlotPlants(r.id).subscribe(
          r => {
            this.plants.next(r.sort(this.sortFn))
          }
        )
      }
    );
  }

  sortFn(a: Plant, b: Plant): number {
    return Date.parse(
      a.timestamp.slice(
        0, a.timestamp.length-3)) -
    Date.parse(
      b.timestamp.slice(
        0, a.timestamp.length-3))
  }

  navigateBack(): void {
    this.router.navigateByUrl("/user/plots");
  }

  reverseSort(): void { 
    this.sortLowToHigh = !this.sortLowToHigh;
    this.plants.next(
      this.accessiblePlants
      .sort(
        (a, b) => {
          return (((this.sortLowToHigh) ? 1 : -1)*this.sortFn(a, b))
        }
      )
    );
  }

}
