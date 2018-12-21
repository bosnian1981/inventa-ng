import { NgModule } from '@angular/core';
import { MatIconModule, MatTabsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTooltipModule } from '@angular/material';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
    imports: [
        HighlightModule.forRoot({ theme: 'arduino-light' })
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatTooltipModule,
        ClipboardModule,
        HighlightModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class SharedMaterialModule {}
