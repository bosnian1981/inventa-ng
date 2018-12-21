import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatProgressBarModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule
} from '@angular/material';
import { SharedModule } from 'shared/shared.module';
import { DividerComponent } from 'pages/material/layout/divider/divider.component';
import { ExpansionPanelComponent } from 'pages/material/layout/expansion-panel/expansion-panel.component';
import { TabGroupWithDynamicallyChangingTabsComponent } from 'pages/material/layout/tabs/tab-group-with-dynamically-changing-tabs/tab-group-with-dynamically-changing-tabs.component';
import { TreeWithNestedNodesComponent } from 'pages/material/layout/tree/tree-with-nested-nodes/tree-with-nested-nodes.component';
import { SharedMaterialModule } from 'pages/material/shared-material.module';
import { CardWithMultipleSectionsComponent } from './card/card-with-multiple-sections/card-with-multiple-sections.component';
import { CardComponent } from './card/card.component';
import { SimpleCardComponent } from './card/simple-card/simple-card.component';
import { BasicExpansionPanelComponent } from './expansion-panel/basic-expansion-panel/basic-expansion-panel.component';
import { ExpansionPanelAsAccordionComponent } from './expansion-panel/expansion-panel-as-accordion/expansion-panel-as-accordion.component';
import { BasicGridListComponent } from './grid-list/basic-grid-list/basic-grid-list.component';
import { DynamicGridListComponent } from './grid-list/dynamic-grid-list/dynamic-grid-list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { BasicListComponent } from './list/basic-list/basic-list.component';
import { ListWithSectionsComponent } from './list/list-with-sections/list-with-sections.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { BasicUseOfTabGroupComponent } from './tabs/basic-use-of-tab-group/basic-use-of-tab-group.component';
import { BasicUseOfTabNavbarComponent } from './tabs/basic-use-of-tab-navbar/basic-use-of-tab-navbar.component';
import { CustomizinThemeOnTabGroupComponent } from './tabs/customizin-theme-on-tab-group/customizin-theme-on-tab-group.component';
import { TabGroupWithAssyncronouslyLoadedContentComponent } from './tabs/tab-group-with-assyncronously-loaded-content/tab-group-with-assyncronously-loaded-content.component';
import { TabGroupWithDynamicHeightComponent } from './tabs/tab-group-with-dynamic-height/tab-group-with-dynamic-height.component';
import { TabGroupWithHeadersOnBottomComponent } from './tabs/tab-group-with-headers-on-bottom/tab-group-with-headers-on-bottom.component';
import { TabGroupWithLazyLoadedContentComponent } from './tabs/tab-group-with-lazy-loaded-content/tab-group-with-lazy-loaded-content.component';
import { TabGroupWithStratchedLabelComponent } from './tabs/tab-group-with-stratched-label/tab-group-with-stratched-label.component';
import { TabsComponent } from './tabs/tabs.component';
import { UsingTabsWithCustomLabelTemplateComponent } from './tabs/using-tabs-with-custom-label-template/using-tabs-with-custom-label-template.component';
import { TreeWithCheckboxesComponent } from './tree/tree-with-checkboxes/tree-with-checkboxes.component';
import { TreeWithDynamicDataComponent } from './tree/tree-with-dynamic-data/tree-with-dynamic-data.component';
import { TreeWithFlatNodesComponent } from './tree/tree-with-flat-nodes/tree-with-flat-nodes.component';
import { TreeWithPartialyLoadedDataComponent } from './tree/tree-with-partialy-loaded-data/tree-with-partialy-loaded-data.component';
import { TreeComponent } from './tree/tree.component';

const components = [
  // card
  CardComponent,
  SimpleCardComponent,
  CardWithMultipleSectionsComponent,
  // end - card

  // divider
  DividerComponent,
  // end - divider

  // expansion panel
  ExpansionPanelComponent,
  BasicExpansionPanelComponent,
  ExpansionPanelAsAccordionComponent,
  // end - expansion panel

  // grid list
  GridListComponent,
  BasicGridListComponent,
  DynamicGridListComponent,
  // end - grid list

  // list
  ListComponent,
  BasicListComponent,
  ListWithSectionsComponent,
  // end - list

  // stepper
  StepperComponent,
  // end - stepper

  // tabs
  TabsComponent,
  BasicUseOfTabGroupComponent,
  BasicUseOfTabNavbarComponent,
  CustomizinThemeOnTabGroupComponent,
  TabGroupWithAssyncronouslyLoadedContentComponent,
  TabGroupWithDynamicHeightComponent,
  TabGroupWithDynamicallyChangingTabsComponent,
  TabGroupWithHeadersOnBottomComponent,
  TabGroupWithLazyLoadedContentComponent,
  TabGroupWithStratchedLabelComponent,
  UsingTabsWithCustomLabelTemplateComponent,
  // end - tabs

  // tree
  TreeComponent,
  TreeWithCheckboxesComponent,
  TreeWithDynamicDataComponent,
  TreeWithFlatNodesComponent,
  TreeWithNestedNodesComponent,
  TreeWithPartialyLoadedDataComponent
  // end - tree
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTreeModule,
    MatProgressBarModule
  ],
  declarations: [components],
  exports: [components]
})
export class LayoutModule {}
