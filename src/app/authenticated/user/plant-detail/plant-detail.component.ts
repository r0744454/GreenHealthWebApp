import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionStrings } from 'src/app/Globals';
import { Plant } from 'src/app/shared/models/Plant';
import { Result } from 'src/app/shared/models/Result';
import { PlantService } from 'src/app/shared/services/plant/plant.service';
import { ResultService } from 'src/app/shared/services/result/result.service';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {

  plotId: number = 0;
  plantId: number = 0;
  speciesList: string[] = ["mais", "fles"]
  weekNumbers: number[] = [1,2,3,4,5,6]

  plant: Plant = {id: 0, plotId: 0, timestamp: ""}
  result: Result = {id: 0, growthStage: 0}

  imgUrl: string = "";
  accDisp: string = "";

  trueValue = true;
  savingResult = false;

  constructor(public t: TranslationService, private ps: PlantService, private rs: ResultService, private ar: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    this.plotId = parseInt(this.ar.snapshot.paramMap.get("pid") ?? "0");
    this.plantId = parseInt(this.ar.snapshot.paramMap.get("id") ?? "0");

    this.ps.getPlant(this.plantId).subscribe(
      r => {
        this.plant = r;
        if(this.plant.result != null) {
          this.result = this.plant.result;
          this.setAcc(this.plant.result.accuracy ?? 0);
        }

        this.setImgUrl();
      }
    );
  }

  setImgUrl(): void {
    if(this.plant.imagePath == null) {
      this.imgUrl =  "../../../assets/img/picture.jpeg";
    }
    this.imgUrl = ConnectionStrings.blobUrl + this.plant.imagePath;
  }

  analysePlant(): void {
    this.ps.getPlantResult(this.plantId).subscribe(
      r => {
        this.plant.resultId = r.id;
        this.plant.result = r;

        this.result = r;
        this.setAcc(r.accuracy ?? 0);
      }
    );
  }

  navigateBack(): void {
    this.r.navigateByUrl("user/plots/"+this.plotId);
  }

  onSubmit(): void {
    this.rs.putResult(this.result).subscribe();
    this.plant.result = this.result;
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

  setAcc(a: number): void {
    this.accDisp = (Math.round(a*100)/100).toString() + "%";
  }

}
