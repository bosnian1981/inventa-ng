import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { SharedModule } from 'shared/shared.module';
import { SharedMaterialModule } from 'pages/material/shared-material.module';
import { BasicPaginatorComponent } from './paginator/basic-paginator/basic-paginator.component';
import { ConfigurablePaginatorComponent } from './paginator/configurable-paginator/configurable-paginator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { BasicUseOfMatTableComponent } from './table/basic-use-of-mat-table/basic-use-of-mat-table.component';
import { BasicUseOfTableMatTableComponent } from './table/basic-use-of-table-mat-table/basic-use-of-table-mat-table.component';
import { DatatableWithSortinPaginationAndFilteringComponent } from './table/datatable-with-sortin-pagination-and-filtering/datatable-with-sortin-pagination-and-filtering.component';
import { FooterRowTableComponent } from './table/footer-row-table/footer-row-table.component';
import { TableDynamicallyChangingColumnsComponent } from './table/table-dynamically-changing-columns/table-dynamically-changing-columns.component';
import { TableRetreavingDataByHttpComponent } from './table/table-retreaving-data-by-http/table-retreaving-data-by-http.component';
import { TableShowingEachRowPropertiesComponent } from './table/table-showing-each-row-properties/table-showing-each-row-properties.component';
import { TableWithExpendableRowsComponent } from './table/table-with-expendable-rows/table-with-expendable-rows.component';
import { TableWithFilteringComponent } from './table/table-with-filtering/table-with-filtering.component';
import { TableWithMultiHeaderAndFooterRowsComponent } from './table/table-with-multi-header-and-footer-rows/table-with-multi-header-and-footer-rows.component';
import { TableWithPaginationComponent } from './table/table-with-pagination/table-with-pagination.component';
import { TableWithSelectionComponent } from './table/table-with-selection/table-with-selection.component';
import { TableWithSortingComponent } from './table/table-with-sorting/table-with-sorting.component';
import { TableComponent } from './table/table.component';

@NgModule({
imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SharedMaterialModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    HttpClientModule,
    MatCheckboxModule
],
declarations: [
    // paginator
    PaginatorComponent,
    BasicPaginatorComponent,
    ConfigurablePaginatorComponent,
    // end - peginator

    // table
    TableComponent,
    BasicUseOfMatTableComponent,
    BasicUseOfTableMatTableComponent,
    DatatableWithSortinPaginationAndFilteringComponent,
    FooterRowTableComponent,
    TableDynamicallyChangingColumnsComponent,
    TableRetreavingDataByHttpComponent,
    TableShowingEachRowPropertiesComponent,
    TableWithExpendableRowsComponent,
    TableWithFilteringComponent,
    TableWithMultiHeaderAndFooterRowsComponent,
    TableWithPaginationComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    // ned table
],
exports: [
    // paginator
    PaginatorComponent,
    BasicPaginatorComponent,
    ConfigurablePaginatorComponent,
    // end - peginator

    // table
    TableComponent,
    BasicUseOfMatTableComponent,
    BasicUseOfTableMatTableComponent,
    DatatableWithSortinPaginationAndFilteringComponent,
    FooterRowTableComponent,
    TableDynamicallyChangingColumnsComponent,
    TableRetreavingDataByHttpComponent,
    TableShowingEachRowPropertiesComponent,
    TableWithExpendableRowsComponent,
    TableWithFilteringComponent,
    TableWithMultiHeaderAndFooterRowsComponent,
    TableWithPaginationComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    // ned table
]
})

export class DatatableModule {}
