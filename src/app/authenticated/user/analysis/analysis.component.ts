import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  image: string = "";
  plant: Plant = {id: 0, userId: 0}

  result: Result | null = null;

  state$: Observable<object> = new Observable();

  constructor(private resultService: ResultService, private plantService: PlantService, private route: ActivatedRoute, private analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.image = this.analysisService.imageString;
    this.plant = this.analysisService.plant;

    console.log(this.image);
    console.log(this.plant);

    /*this.plantService.getPlantResult(this.plant.id).subscribe(
      r => {
        this.result = r;
      }
    );*/
    this.result = {id: 1, growthStage: 2, accuracy: 99.7}
  }

}
