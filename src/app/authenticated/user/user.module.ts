import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingmodule } from './user-routing.module';
import { PlotCardComponent } from './plot-card/plot-card.component';
import { PlotOverviewComponent } from './plot-overview/plot-overview.component';
import { PlotDetailComponent } from './plot-detail/plot-detail.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';



@NgModule({
  declarations: [
    AnalysisComponent,
    UploadComponent,
    PlotCardComponent,
    PlotOverviewComponent,
    PlotDetailComponent,
    PlantCardComponent,
    DashboardComponent,
    PlantDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingmodule,
  ],
  exports: [
    AnalysisComponent,
    UploadComponent,
    PlotOverviewComponent,
    PlotDetailComponent,
    DashboardComponent,
    PlantDetailComponent,
  ]
})
export class UserModule { }
