import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';

export const routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent, data: { breadcrumb: 'Customers' } },
  { path: 'products', component: ProductsComponent, data: { breadcrumb: 'Products' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule {}
