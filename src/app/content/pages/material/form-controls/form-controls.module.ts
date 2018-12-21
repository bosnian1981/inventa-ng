import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';
import { SharedModule } from 'shared/shared.module';
import { AutocompleteOverviewComponent } from 'pages/material/form-controls/autocomplete/autocomplete-overview/autocomplete-overview.component';
import { AutocompleteComponent } from 'pages/material/form-controls/autocomplete/autocomplete.component';
import { DisplayValueAutocompleteComponent } from 'pages/material/form-controls/autocomplete/display-value-autocomplete/display-value-autocomplete.component';
import { FilterAutocompleteComponent } from 'pages/material/form-controls/autocomplete/filter-autocomplete/filter-autocomplete.component';
import { HighlightFirstAutocompleteComponent } from 'pages/material/form-controls/autocomplete/highlight-first-autocomplete/highlight-first-autocomplete.component';
import { OptionGroupsAutocompleteComponent } from 'pages/material/form-controls/autocomplete/option-groups-autocomplete/option-groups-autocomplete.component';
import { SimpleAutocompleteComponent } from 'pages/material/form-controls/autocomplete/simple-autocomplete/simple-autocomplete.component';
import { BasicDatepickerComponent } from 'pages/material/form-controls/datepicker/basic-datepicker/basic-datepicker.component';
import { DatepickerInputchangeEventsComponent } from 'pages/material/form-controls/datepicker/datepicker-inputchange-events/datepicker-inputchange-events.component';
import { DatepickerOpenMethodComponent } from 'pages/material/form-controls/datepicker/datepicker-open-method/datepicker-open-method.component';
import { DatepickerComponent } from 'pages/material/form-controls/datepicker/datepicker.component';
import { SimpleFormFieldComponent } from 'pages/material/form-controls/form-field/simple-form-field/simple-form-field.component';
import { RadioButtonComponent } from 'pages/material/form-controls/radio-button/radio-button.component';
import { BasicSelectComponent } from 'pages/material/form-controls/select/basic-select/basic-select.component';
import { SelectWithCustomErrorstatematcherComponent } from 'pages/material/form-controls/select/select-with-custom-errorstatematcher/select-with-custom-errorstatematcher.component';
import { SelectWithOptionGroupsComponent } from 'pages/material/form-controls/select/select-with-option-groups/select-with-option-groups.component';
import { SlideToggleComponent } from 'pages/material/form-controls/slide-toggle/slide-toggle.component';
import { SharedMaterialModule } from 'pages/material/shared-material.module';
import { BasicCheckboxComponent } from './checkbox/basic-checkbox/basic-checkbox.component';
import { CheckboxConfigurationComponent } from './checkbox/checkbox-configuration/checkbox-configuration.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerSelectedValueComponent } from './datepicker/datepicker-selected-value/datepicker-selected-value.component';
import { DatepickerStartdateComponent } from './datepicker/datepicker-startdate/datepicker-startdate.component';
import { DatepickerTouchUiComponent } from './datepicker/datepicker-touch-ui/datepicker-touch-ui.component';
import { DatepickerWithDifferentLocaleComponent } from './datepicker/datepicker-with-different-locale/datepicker-with-different-locale.component';
import { DatepickerWithFilterValidationComponent } from './datepicker/datepicker-with-filter-validation/datepicker-with-filter-validation.component';
import { DatepickerWithMinMaxValidationComponent } from './datepicker/datepicker-with-min-max-validation/datepicker-with-min-max-validation.component';
import { DisabledDatepickerComponent } from './datepicker/disabled-datepicker/disabled-datepicker.component';
import { FormFieldThemingComponent } from './form-field/form-field-theming/form-field-theming.component';
import { FormFieldWithErrorMessagesComponent } from './form-field/form-field-with-error-messages/form-field-with-error-messages.component';
import { FormFieldWithHintsComponent } from './form-field/form-field-with-hints/form-field-with-hints.component';
import { FormFieldWithLabelComponent } from './form-field/form-field-with-label/form-field-with-label.component';
import { FormFieldWithPrefixAndSufixComponent } from './form-field/form-field-with-prefix-and-sufix/form-field-with-prefix-and-sufix.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { AutoresizingTextareaComponent } from './input/autoresizing-textarea/autoresizing-textarea.component';
import { BasicInputsComponent } from './input/basic-inputs/basic-inputs.component';
import { InputWithClearButtonComponent } from './input/input-with-clear-button/input-with-clear-button.component';
import { InputWithCustomErrorstatematcherComponent } from './input/input-with-custom-errorstatematcher/input-with-custom-errorstatematcher.component';
import { InputWithErrorMessagesComponent } from './input/input-with-error-messages/input-with-error-messages.component';
import { InputWithPrefixAndSufixComponent } from './input/input-with-prefix-and-sufix/input-with-prefix-and-sufix.component';
import { InputComponent } from './input/input.component';
import { InputsInFormComponent } from './input/inputs-in-form/inputs-in-form.component';
import { InputsWithHintsComponent } from './input/inputs-with-hints/inputs-with-hints.component';
import { BasicRadiosComponent } from './radio-button/basic-radios/basic-radios.component';
import { RadiosWithNgmodelComponent } from './radio-button/radios-with-ngmodel/radios-with-ngmodel.component';
import { DisabledSelectComponent } from './select/disabled-select/disabled-select.component';
import { SelectInFormComponent } from './select/select-in-form/select-in-form.component';
import { SelectWith2WayBindingComponent } from './select/select-with-2-way-binding/select-with-2-way-binding.component';
import { SelectWithCustomPanelStylingComponent } from './select/select-with-custom-panel-styling/select-with-custom-panel-styling.component';
import { SelectWithCustomTriggerTextComponent } from './select/select-with-custom-trigger-text/select-with-custom-trigger-text.component';
import { SelectWithFormFieldFeatureComponent } from './select/select-with-form-field-feature/select-with-form-field-feature.component';
import { SelectWithMultipleSelectionComponent } from './select/select-with-multiple-selection/select-with-multiple-selection.component';
import { SelectWithResetOptionComponent } from './select/select-with-reset-option/select-with-reset-option.component';
import { SelectComponent } from './select/select.component';
import { BasicSlideToggleComponent } from './slide-toggle/basic-slide-toggle/basic-slide-toggle.component';
import { ConfigurableSlideToggleComponent } from './slide-toggle/configurable-slide-toggle/configurable-slide-toggle.component';
import { BasicSliderComponent } from './slider/basic-slider/basic-slider.component';
import { SliderConfigurationComponent } from './slider/slider-configuration/slider-configuration.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  declarations: [
    // autocomplete
    AutocompleteComponent,
    AutocompleteOverviewComponent,
    DisplayValueAutocompleteComponent,
    FilterAutocompleteComponent,
    HighlightFirstAutocompleteComponent,
    OptionGroupsAutocompleteComponent,
    SimpleAutocompleteComponent,
    // end - autocomplete

    // checkbox
    CheckboxComponent,
    BasicCheckboxComponent,
    CheckboxConfigurationComponent,
    // end - checkbox

    // datepicker
    DatepickerComponent,
    BasicDatepickerComponent,
    DatepickerInputchangeEventsComponent,
    DatepickerOpenMethodComponent,
    DatepickerSelectedValueComponent,
    DatepickerStartdateComponent,
    DatepickerTouchUiComponent,
    DatepickerWithDifferentLocaleComponent,
    DatepickerWithFilterValidationComponent,
    DatepickerWithMinMaxValidationComponent,
    DisabledDatepickerComponent,
    // end - datepicker

    // form field
    FormFieldComponent,
    FormFieldThemingComponent,
    FormFieldWithErrorMessagesComponent,
    FormFieldWithHintsComponent,
    FormFieldWithLabelComponent,
    FormFieldWithPrefixAndSufixComponent,
    SimpleFormFieldComponent,
    // end - form field

    // input
    InputComponent,
    AutoresizingTextareaComponent,
    BasicInputsComponent,
    InputWithClearButtonComponent,
    InputWithCustomErrorstatematcherComponent,
    InputWithErrorMessagesComponent,
    InputWithPrefixAndSufixComponent,
    InputsInFormComponent,
    InputsWithHintsComponent,
    // end - input

    // radio button
    RadioButtonComponent,
    BasicRadiosComponent,
    RadiosWithNgmodelComponent,
    // end - radio button

    // select
    SelectComponent,
    BasicSelectComponent,
    DisabledSelectComponent,
    SelectInFormComponent,
    SelectWith2WayBindingComponent,
    SelectWithCustomErrorstatematcherComponent,
    SelectWithCustomPanelStylingComponent,
    SelectWithCustomTriggerTextComponent,
    SelectWithFormFieldFeatureComponent,
    SelectWithMultipleSelectionComponent,
    SelectWithOptionGroupsComponent,
    SelectWithResetOptionComponent,
    // select

    // slide toggle
    SlideToggleComponent,
    BasicSlideToggleComponent,
    ConfigurableSlideToggleComponent,
    // end - slide togglee

    // slider
    SliderComponent,
    BasicSliderComponent,
    SliderConfigurationComponent
    // end - slidder
  ],
  exports: [
    // autocomplete
    AutocompleteComponent,
    AutocompleteOverviewComponent,
    DisplayValueAutocompleteComponent,
    FilterAutocompleteComponent,
    HighlightFirstAutocompleteComponent,
    OptionGroupsAutocompleteComponent,
    SimpleAutocompleteComponent,
    // end - autocomplete

    // checkbox
    CheckboxComponent,
    BasicCheckboxComponent,
    CheckboxConfigurationComponent,
    // end - checkbox

    // datepicker
    DatepickerComponent,
    BasicDatepickerComponent,
    DatepickerInputchangeEventsComponent,
    DatepickerOpenMethodComponent,
    DatepickerSelectedValueComponent,
    DatepickerStartdateComponent,
    DatepickerTouchUiComponent,
    DatepickerWithDifferentLocaleComponent,
    DatepickerWithFilterValidationComponent,
    DatepickerWithMinMaxValidationComponent,
    DisabledDatepickerComponent,
    // end - datepicker

    // form field
    FormFieldComponent,
    FormFieldThemingComponent,
    FormFieldWithErrorMessagesComponent,
    FormFieldWithHintsComponent,
    FormFieldWithLabelComponent,
    FormFieldWithPrefixAndSufixComponent,
    SimpleFormFieldComponent,
    // end - form field

    // input
    InputComponent,
    AutoresizingTextareaComponent,
    BasicInputsComponent,
    InputWithClearButtonComponent,
    InputWithCustomErrorstatematcherComponent,
    InputWithErrorMessagesComponent,
    InputWithPrefixAndSufixComponent,
    InputsInFormComponent,
    InputsWithHintsComponent,
    // end - input

    // radio button
    RadioButtonComponent,
    BasicRadiosComponent,
    RadiosWithNgmodelComponent,
    // end - radio button

    // select
    SelectComponent,
    BasicSelectComponent,
    DisabledSelectComponent,
    SelectInFormComponent,
    SelectWith2WayBindingComponent,
    SelectWithCustomErrorstatematcherComponent,
    SelectWithCustomPanelStylingComponent,
    SelectWithCustomTriggerTextComponent,
    SelectWithFormFieldFeatureComponent,
    SelectWithMultipleSelectionComponent,
    SelectWithOptionGroupsComponent,
    SelectWithResetOptionComponent,
    // select

    // slide toggle
    SlideToggleComponent,
    BasicSlideToggleComponent,
    ConfigurableSlideToggleComponent,
    // end - slide togglee

    // slider
    SliderComponent,
    BasicSliderComponent,
    SliderConfigurationComponent
    // end - slidder
  ]
})
export class FormControlsModule {}
