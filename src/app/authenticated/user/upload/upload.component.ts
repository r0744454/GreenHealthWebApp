import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/shared/models/Plant';
import { AnalysisService } from 'src/app/shared/services/analysis/analysis.service';
import { PlantService } from 'src/app/shared/services/plant/plant.service';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  plantImage: File = new File([], "tfile.jpg");
  isSubmitted: boolean = false;
  submitError: boolean = false;

  //Has to be changed!!!!!! Maybe back-end can be changed?
  plant: Plant = {id: 0, plotId: parseInt(localStorage.getItem('id')??'0')}

  imgSource: string = "";

  constructor(private plantService: PlantService, private router: Router, private analysisService: AnalysisService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if(this.plantImage.size == 0) {
      this.submitError = true;
      return;
    }

    var data = new FormData();
    data.append('image', this.plantImage);

    this.plantService.postPlant(this.plant).subscribe(r1 => {
      this.plant = r1;
      this.plantService.patchImage(this.plant, data).subscribe(r2 => {
        this.analysisService.imageString = this.imgSource;
        this.analysisService.plant = this.plant;
        this.router.navigateByUrl("/user/analysis");
      },
      err => {
        console.log(err);
      });
    },
    err => {
      console.log(err);
    });
  }

  getBase64(file: File): Promise<string |ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onRefreshFile(e: Event): void {
    var target = (e as HTMLInputEvent).target
    if(target.files != null) {
      this.plantImage = target.files[0];

      this.getBase64(this.plantImage).then(r => {
        if(r != null) {
          this.imgSource = r.toString();
        }
      });

      this.submitError = false;
    }
  }

}
