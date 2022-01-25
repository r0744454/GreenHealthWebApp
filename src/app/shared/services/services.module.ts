import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from './plant/plant.service';
import { ResultService } from './result/result.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/authentication/security.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    PlantService,
    ResultService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
  ]
})
export class ServicesModule { }
