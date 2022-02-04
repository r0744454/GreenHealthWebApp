import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from 'src/app/shared/models/Plant';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';
import { ConnectionStrings } from 'src/app/Globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  @Input() plant: Plant = {id: 0, plotId: 0, timestamp: ""}
  @Output() deletionId: EventEmitter<number> = new EventEmitter<number>();

  imgUrl: string = "../../../assets/img/picture.jpeg";
  confirmingDelete: boolean = false;

  constructor(public t: TranslationService, public r: Router) { }

  ngOnInit(): void {
    this.imgUrl = this.getImgUrl();
  }

  getImgUrl(): string {
    if(this.plant.imagePath == null) {
      return "../../../assets/img/picture.jpeg";
    }
    return ConnectionStrings.blobUrl + this.plant.imagePath;
  }

  deletePlant(): void {
    if(!this.confirmingDelete) {
      this.confirmingDelete = true;
      return;
    }
    this.deletionId.emit(this.plant.id);
    this.confirmingDelete = false;
  }

  resetConfirmation(): void {
    this.confirmingDelete = false;
  }

  navigateDetail(): void {
    this.r.navigateByUrl("user/plots/"+this.plant.plotId+'/'+this.plant.id);
  }

}
