import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnectionStrings } from 'src/app/Globals';
import { Plot } from '../../models/Plot';
import { Plant } from '../../models/Plant';

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  constructor(private httpClient: HttpClient) { }

  getPlot(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(ConnectionStrings.apiUrl + "Plots/" + id);
  }

  getPlots(): Observable<Plot[]> {
    return this.httpClient.get<Plot[]>(ConnectionStrings.apiUrl + "Plots");
  }

  getPlotPlants(id: number): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(ConnectionStrings.apiUrl + "Plots/" + id + "/Plants");
  }

  putPlot(plot: Plot): void {
    this.httpClient.put(ConnectionStrings.apiUrl + "Plots/" + plot.id, plot);
  }

  postPlot(plot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(ConnectionStrings.apiUrl + "Plots", plot);
  }

  deletePlot(id: number): void {
    this.httpClient.delete(ConnectionStrings.apiUrl + "Plots/" + id);
  }

  getOrganisationPlots(id: number): Observable<Plot[]> {
    return this.httpClient.get<Plot[]>(ConnectionStrings.apiUrl + "Organisations/" + id + "/plots");
  }

  setDefaultPlot(plot: Plot): void {
    localStorage.setItem("defaultPlot", JSON.stringify(plot));
  }

  getDefaultPlot(): Plot {
    var plotString = localStorage.getItem("defaultPlot");
    if(plotString == null || plotString == "") {
      return {id: 0, organisationId: 0, location: ""};
    }
    return JSON.parse(plotString);
  }
}
