import { Injectable } from '@angular/core';
import { Plant } from '../../models/Plant';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }

  imageString: string = "";
  plant: Plant = {id: 0, plotId: 0,timestamp: ""};
}
