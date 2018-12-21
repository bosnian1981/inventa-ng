import { RipplesComponent } from './buttons-and-indicators/ripples/ripples.component';
import { TooltipComponent } from 'pages/material/popups-and-modals/tooltip/tooltip.component';
import { SnackbarComponent } from 'pages/material/popups-and-modals/snackbar/snackbar.component';
import { BottomSheetComponent } from './popups-and-modals/bottom-sheet/bottom-sheet.component';
import { ListComponent } from './layout/list/list.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { DividerComponent } from 'pages/material/layout/divider/divider.component';
import { CardComponent } from './layout/card/card.component';
import { TableComponent } from './data-table/table/table.component';
import { SlideToggleComponent } from 'pages/material/form-controls/slide-toggle/slide-toggle.component';
import { RadioButtonComponent } from 'pages/material/form-controls/radio-button/radio-button.component';
import { InputComponent } from './form-controls/input/input.component';
import { AutocompleteComponent } from './form-controls/autocomplete/autocomplete.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'pages/material/buttons-and-indicators/button/button.component';
import { ButtonToggleComponent } from 'pages/material/buttons-and-indicators/button-toggle/button-toggle.component';
import { BadgeComponent } from 'pages/material/buttons-and-indicators/badge/badge.component';
import { ChipsComponent } from 'pages/material/buttons-and-indicators/chips/chips.component';
import { IconComponent } from 'pages/material/buttons-and-indicators/icon/icon.component';
import { ProgressSpinnerComponent } from 'pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from 'pages/material/buttons-and-indicators/progress-bar/progress-bar.component';
import { MenuComponent } from 'pages/material/navigation/menu/menu.component';
import { SidenavComponent } from 'pages/material/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from 'pages/material/navigation/toolbar/toolbar.component';
import { CheckboxComponent } from 'pages/material/form-controls/checkbox/checkbox.component';
import { DatepickerComponent } from 'pages/material/form-controls/datepicker/datepicker.component';
import { FormFieldComponent } from 'pages/material/form-controls/form-field/form-field.component';
import { SelectComponent } from 'pages/material/form-controls/select/select.component';
import { SliderComponent } from 'pages/material/form-controls/slider/slider.component';
import { PaginatorComponent } from 'pages/material/data-table/paginator/paginator.component';
import { GridListComponent } from 'pages/material/layout/grid-list/grid-list.component';
import { StepperComponent } from 'pages/material/layout/stepper/stepper.component';
import { TabsComponent } from 'pages/material/layout/tabs/tabs.component';
import { TreeComponent } from 'pages/material/layout/tree/tree.component';
import { DialogComponent } from 'pages/material/popups-and-modals/dialog/dialog.component';

export const routes = [
  // buttons and indicators
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  { path: 'button', component: ButtonComponent, data: { breadcrumb: 'Button' }},
  { path: 'button-toggle', component: ButtonToggleComponent, data: { breadcrumb: 'Button Toggle' }},
  { path: 'badge', component: BadgeComponent, data: { breadcrumb: 'Badge' } },
  { path: 'chips', component: ChipsComponent, data: { breadcrumb: 'Chips' } },
  { path: 'icon', component: IconComponent, data: { breadcrumb: 'Icon' } },
  { path: 'progress-spinner', component: ProgressSpinnerComponent, data: { breadcrumb: 'Progress Spinner' }},
  { path: 'progress-bar', component: ProgressBarComponent, data: { breadcrumb: 'Progress Bar' }},
  { path: 'ripples', component: RipplesComponent, data: { breadcrumb: 'Ripples' }},

  // navigation
  { path: 'menu', component: MenuComponent, data: { breadcrumb: 'Menu' } },
  { path: 'sidenav', component: SidenavComponent, data: { breadcrumb: 'Sidenav' } },
  { path: 'toolbar', component: ToolbarComponent, data: { breadcrumb: 'Toolbar' } },

  // form controls
  { path: 'autocomplete', component: AutocompleteComponent, data: { breadcrumb: 'Autocomplete' } },
  { path: 'checkbox', component: CheckboxComponent, data: { breadcrumb: 'Checkbox' } },
  { path: 'datepicker', component: DatepickerComponent, data: { breadcrumb: 'Datepicker' } },
  { path: 'form-field', component: FormFieldComponent, data: { breadcrumb: 'Form field' } },
  { path: 'input', component: InputComponent, data: { breadcrumb: 'Input' } },
  { path: 'radio-button', component: RadioButtonComponent, data: { breadcrumb: 'Radio button' } },
  { path: 'select', component: SelectComponent, data: { breadcrumb: 'Select' } },
  { path: 'slide-toggle', component: SlideToggleComponent, data: { breadcrumb: 'Slide toggle' } },
  { path: 'slider', component: SliderComponent, data: { breadcrumb: 'Slider' } },

  // datatable
  { path: 'paginator', component: PaginatorComponent, data: { breadcrumb: 'Paginator' } },
  { path: 'table', component: TableComponent, data: { breadcrumb: 'Table' } },

  // layout
  { path: 'card', component: CardComponent, data: { breadcrumb: 'Card' } },
  { path: 'divider', component: DividerComponent, data: { breadcrumb: 'Divider' } },
  { path: 'expansion-panel', component: ExpansionPanelComponent, data: { breadcrumb: 'Expansion Panel' } },
  { path: 'grid-list', component: GridListComponent, data: { breadcrumb: 'Grid list' } },
  { path: 'list', component: ListComponent, data: { breadcrumb: 'List' } },
  { path: 'stepper', component: StepperComponent, data: { breadcrumb: 'Stepper' } },
  { path: 'tabs', component: TabsComponent, data: { breadcrumb: 'Tabs' } },
  { path: 'tree', component: TreeComponent, data: { breadcrumb: 'Tree' } },

  // popups and modals
  { path: 'bottom-sheet', component: BottomSheetComponent, data: { breadcrumb: 'Bottom Sheet' } },
  { path: 'dialog', component: DialogComponent, data: { breadcrumb: 'Dialog' } },
  { path: 'snackbar', component: SnackbarComponent, data: { breadcrumb: 'Snackbar' } },
  { path: 'tooltip', component: TooltipComponent, data: { breadcrumb: 'Tooltip' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {}
