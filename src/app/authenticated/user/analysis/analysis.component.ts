import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plant } from 'src/app/shared/models/Plant';
import { Result } from 'src/app/shared/models/Result';
import { AnalysisService } from 'src/app/shared/services/analysis/analysis.service';
import { PlantService } from 'src/app/shared/services/plant/plant.service';
import { ResultService } from 'src/app/shared/services/result/result.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  weekNumbers = [0, 1, 2, 3, 4, 5];

  image: string = "";
  plant: Plant = {id: 0, userId: 0}

  result: Result = {id: 0, growthStage: 0};
  accDisp: number = 0;

  state$: Observable<object> = new Observable();

  correcting: boolean = false;

  constructor(private resultService: ResultService, private plantService: PlantService, private router: Router, private analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.image = this.analysisService.imageString;
    this.plant = this.analysisService.plant;

    this.plantService.getPlantResult(this.plant.id).subscribe(
      r => {
        this.result = r;
        this.result.correctedGrowthStage = this.result.growthStage;
        this.accDisp = Math.round((this.result.accuracy ?? 0) *100)/100;
      }
    );
  }

  toggleCorrecting(): void {
    this.correcting = !this.correcting;
  }

  onGrowthStageChange(t: any): void {
    this.result.correctedGrowthStage = t.value;
  }

  onSubmit(): void {
    this.router.navigateByUrl('/');
  }

}
