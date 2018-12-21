import { StatisticsService } from 'shared/services/statistics.service';
import { Statistics } from 'shared/models/statistics';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info-blocks',
  templateUrl: './info-blocks.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoBlocksComponent {
  statistics: Statistics[];

  constructor(private statisticsService: StatisticsService) {
    this.getStatistics();
  }

  public getStatistics(): void {
    this.statisticsService.getStatistics().subscribe(stats => {
      this.statistics = stats;
    });
  }
}
