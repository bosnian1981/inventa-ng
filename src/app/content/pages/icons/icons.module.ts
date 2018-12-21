import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { ClipboardModule } from 'ngx-clipboard';
import { LineAwesomeIconsService } from './icons-core/services/line-awesome-icons.service';
import { MaterialIconsService } from './icons-core/services/material-icons.service';
import { IconsRoutingModule } from './icons.routing';
import { LineAwesomeComponent } from './line-awesome/line-awesome.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ClipboardModule
  ],
  declarations: [MaterialComponent, LineAwesomeComponent],
  providers: [MaterialIconsService, LineAwesomeIconsService]
})
export class IconsModule {}
