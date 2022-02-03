import { Component, OnInit, Input } from '@angular/core';
import { Plant } from 'src/app/shared/models/Plant';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';
import { ConnectionStrings } from 'src/app/Globals';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  @Input() plant: Plant = {id: 0, plotId: 0, timestamp: ""}

  imgUrl: string = "../../../assets/img/picture.jpeg"

  constructor(public t: TranslationService) { }

  ngOnInit(): void {
    this.imgUrl = this.getImgUrl();
  }

  getImgUrl(): string {
    if(this.plant.imagePath == null) {
      return "../../../assets/img/picture.jpeg";
    }
    return ConnectionStrings.blobUrl + this.plant.imagePath;
  }

}
