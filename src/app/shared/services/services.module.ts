import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from './plant/plant.service';
import { ResultService } from './result/result.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/authentication/security.interceptor';
import { AnalysisService } from './analysis/analysis.service';
import { PlotService } from './plot/plot.service';
import { TranslationService } from './translation/translation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    PlantService,
    ResultService,
    PlotService,
    AnalysisService,
    TranslationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
  ]
})
export class ServicesModule { }
