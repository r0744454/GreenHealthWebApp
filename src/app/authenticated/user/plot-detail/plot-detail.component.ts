import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Plant } from 'src/app/shared/models/Plant';
import { Plot } from 'src/app/shared/models/Plot';
import { PlantService } from 'src/app/shared/services/plant/plant.service';
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
  sortLowToHigh = false;

  constructor(public t: TranslationService, private plotService: PlotService, private route: ActivatedRoute, private router: Router, private plantService: PlantService) { }

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
            this.plants.next(r.sort(
              (a, b) => {
                return ((this.sortLowToHigh) ? 1 : -1) * this.sortFn(a, b);
              }));
          }
        );
      }
    );
  }

  sortFn(a: Plant, b: Plant): number {
    if(a.timestamp == null) return -1;
    if(b.timestamp == null) return 1;

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

  analyseAllPlants(): void {
    var a = this.accessiblePlants;
    for(var b of a) {
      this.plantService.getPlantResult(b.id).subscribe(
        r => {
          a.forEach(
            x => {
              if(x.id == b.id) {
                x.result = r;
                x.resultId = r.id;
              }
            }
          )
          this.plants.next(a);
        }
      )
    }
  }

}
