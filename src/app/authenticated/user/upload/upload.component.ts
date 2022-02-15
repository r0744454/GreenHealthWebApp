import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Plant } from 'src/app/shared/models/Plant';
import { Plot } from 'src/app/shared/models/Plot';
import { AnalysisService } from 'src/app/shared/services/analysis/analysis.service';
import { PlantService } from 'src/app/shared/services/plant/plant.service';
import { PlotService } from 'src/app/shared/services/plot/plot.service';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';

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

  defaultPlot: Plot = {id: 0, organisationId: 0, location: ""};
  plots: Plot[] = new Array<Plot>();
  $plots: Subscription = new Subscription();

  plant: Plant = {id: 0, plotId: 0, timestamp: ""}

  imgSource: string = "";

  constructor(private plantService: PlantService, private router: Router, private analysisService: AnalysisService, private plotService: PlotService, public t: TranslationService) { }

  ngOnInit(): void {
    this.defaultPlot = this.plotService.getDefaultPlot();
    this.$plots = this.plotService.getPlots().subscribe(r => {
      this.plots = r;
    })
  }

  onAnalysis(): void {
    this.isSubmitted = true;
    if(this.plantImage.size == 0) {
      this.isSubmitted = false;
      this.submitError = true;
      return;
    }

    var data = new FormData();
    data.append('image', this.plantImage);
    this.plant.plotId = this.defaultPlot.id;

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

  onUpload() {
    this.isSubmitted = true;
    if(this.plantImage.size == 0) {
      this.isSubmitted = false;
      this.submitError = true;
      return;
    }

    var data = new FormData();
    data.append('image', this.plantImage);
    this.plant.plotId = this.defaultPlot.id;

    this.plantService.postPlant(this.plant).subscribe(r1 => {
      this.plant = r1;
      this.plantService.patchImage(this.plant, data).subscribe(r2 => {
        this.router.navigateByUrl("user/plots/"+r2.plotId+'/'+r2.id);
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

  compareFn(x: Plot, y: Plot): boolean {
    return x.id == y.id;
  }

}
