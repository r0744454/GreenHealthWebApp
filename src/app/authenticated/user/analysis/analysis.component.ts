import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plant } from 'src/app/shared/models/Plant';
import { Result } from 'src/app/shared/models/Result';
import { AnalysisService } from 'src/app/shared/services/analysis/analysis.service';
import { PlantService } from 'src/app/shared/services/plant/plant.service';
import { ResultService } from 'src/app/shared/services/result/result.service';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  speciesList: string[] = ["mais", "fles"]
  weekNumbers: number[] = [1,2,3,4,5,6]
  image: string = ""
  plant: Plant = {id: 0, plotId: 0, timestamp: ""}

  result: Result = {id: 0, growthStage: 0};
  accDisp: number = 0;

  state$: Observable<object> = new Observable();

  correcting: boolean = false;

  constructor(private resultService: ResultService, private plantService: PlantService, private router: Router, private analysisService: AnalysisService, public t: TranslationService) { }

  ngOnInit(): void {
    this.image = this.analysisService.imageString;
    this.plant = this.analysisService.plant;

    this.plantService.getPlantResult(this.plant.id).subscribe(
      r => {
        this.result = r;
        this.accDisp = Math.round((this.result.accuracy ?? 0) *100)/100;
      }
    );
  }

  toggleCorrecting(): void {
    this.correcting = !this.correcting;
  }

  sanitizeGrowthStage(a: string): number {
    return parseInt(a.split(' ')[1]);
  }

  onGrowthStageChange(t: any): void {
    this.result.correctedGrowthStage = this.sanitizeGrowthStage(t.value);
  }

  onSpeciesChange(t: any): void {
    this.result.correctedSpecies = t.value;
  }

  onSubmit(): void {
    this.resultService.putResult(this.result).subscribe(
      r => {
        this.router.navigateByUrl('/');
      }
    )
  }

}
