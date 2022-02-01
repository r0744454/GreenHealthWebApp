import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingmodule } from './user-routing.module';
import { PlotCardComponent } from './plot-card/plot-card.component';
import { PlotOverviewComponent } from './plot-overview/plot-overview.component';



@NgModule({
  declarations: [
    AnalysisComponent,
    UploadComponent,
    PlotCardComponent,
    PlotOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingmodule,
  ],
  exports: [
    AnalysisComponent,
    UploadComponent,
  ]
})
export class UserModule { }
