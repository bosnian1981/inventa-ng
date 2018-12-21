import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { DeleteDialogComponent } from 'shared/components/delete-dialog/delete-dialog.component';
import { SharedModule } from 'shared/shared.module';
import { UserService } from 'shared/services/user.service';
import { CustomerEditDialogComponent } from './customers/customer-edit-dialog/customer-edit-dialog.component';
import { CustomersComponent } from './customers/customers.component';
import { EcommerceRoutingModule } from './ecommerce.routing';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EcommerceRoutingModule,
    SharedModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    CustomersComponent,
    CustomerEditDialogComponent,
    ProductsComponent
  ],
  entryComponents: [DeleteDialogComponent, CustomerEditDialogComponent],
  providers: [UserService]
})
export class EcommerceModule {}
