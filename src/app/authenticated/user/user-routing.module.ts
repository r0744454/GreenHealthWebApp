import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadComponent } from "./upload/upload.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { PlotOverviewComponent } from "./plot-overview/plot-overview.component";
import { PlotDetailComponent } from "./plot-detail/plot-detail.component";

const routes: Routes = [
    { path: "upload", component: UploadComponent },
    { path: "analysis", component: AnalysisComponent },
    { path: "plots", component: PlotOverviewComponent},
    { path: "plots/:id", component: PlotDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingmodule {}