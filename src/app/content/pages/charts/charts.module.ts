import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarChartComponent } from './charts-js/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './charts-js/bubble-chart/bubble-chart.component';
import { ChartsJsComponent } from './charts-js/charts-js.component';
import { DoughnutChartComponent } from './charts-js/doughnut-chart/doughnut-chart.component';
import { GroupedBarChartComponent } from './charts-js/grouped-bar-chart/grouped-bar-chart.component';
import { HorizontalBarChartComponent } from './charts-js/horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartComponent } from './charts-js/line-chart/line-chart.component';
import { MixedChartComponent } from './charts-js/mixed-chart/mixed-chart.component';
import { PieChartComponent } from './charts-js/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './charts-js/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './charts-js/radar-chart/radar-chart.component';
import { ChartsRoutingModule } from './charts.routing';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { NgxHorizontalBarChartComponent } from './ngx-charts/ngx-horizontal-bar-chart/ngx-horizontal-bar-chart.component';
import { NgxVerticalBarChartComponent } from './ngx-charts/ngx-vertical-bar-chart/ngx-vertical-bar-chart.component';
import { QuillModule } from 'ngx-quill';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPieChartComponent } from './ngx-charts/ngx-pie-chart/ngx-pie-chart.component';
import { NgxAdvancedPieChartComponent } from './ngx-charts/ngx-advanced-pie-chart/ngx-advanced-pie-chart.component';
import { NgxLineChartComponent } from './ngx-charts/ngx-line-chart/ngx-line-chart.component';
import { NgxAreaChartComponent } from './ngx-charts/ngx-area-chart/ngx-area-chart.component';

@NgModule({
  imports: [CommonModule, ChartsRoutingModule, NgxChartsModule, QuillModule],
  declarations: [
    NgxChartsComponent,
    ChartsJsComponent,
    BarChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    GroupedBarChartComponent,
    HorizontalBarChartComponent,
    LineChartComponent,
    MixedChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    NgxVerticalBarChartComponent,
    NgxHorizontalBarChartComponent,
    NgxPieChartComponent,
    NgxAdvancedPieChartComponent,
    NgxLineChartComponent,
    NgxAreaChartComponent
  ]
})
export class ChartsModule {}
