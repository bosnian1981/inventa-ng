import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MatDialog,
  MatSort,
  MatTableDataSource,
  MatPaginator
} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomerEditDialogComponent } from 'pages/apps/ecommerce/customers/customer-edit-dialog/customer-edit-dialog.component';
import { User } from 'shared/models/user';
import { UserService } from 'shared/services/user.service';
import { DeleteDialogComponent } from 'shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements OnInit {
  dataSource: User[];
  ds = new MatTableDataSource(this.dataSource);

  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'surname',
    'email',
    'phone',
    'gender',
    'actions'
  ];
  selection = new SelectionModel<User>(true, []);
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private customerService: UserService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCustomers();
    this.ds.sort = this.sort;
    this.ds.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.ds.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.ds.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.ds.filter = filterValue.trim().toLowerCase();
  }

  public getCustomers(): void {
    this.customerService.getUsers().subscribe(customers => {
      this.ds.data = customers;
    });
  }

  addCustomer() {
    const newCustomer = new User();
    this.editCustomer(newCustomer);
  }

  editCustomer(customer: User) {
    const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
      data: { customer },
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (customer.id > 0) {
        this.toastr.success('Customer updated successfully');
      } else {
        this.toastr.success('Customer created successfully');
      }

      this.getCustomers();
    });
  }

  public deleteCustomer(customer: User) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: 'Delete Customer',
        description: 'Are you sure you want to delete this customer?'
      },
      width: '440px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.customerService.deleteUser(customer.id).subscribe(() => {
        this.getCustomers();
      });
      setTimeout(() => {
        this.toastr.success('Customer deleted successfully');
      }, 1000);
    });
  }

  deleteCustomers() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: 'Delete Customers',
        description: 'Are you sure you want to delete selected customers?'
      },
      width: '440px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      const idsForDeletion: number[] = [];
      for (let i = 0; i < this.selection.selected.length; i++) {
        idsForDeletion.push(this.selection.selected[i].id);
      }

      this.customerService.deleteUsers(idsForDeletion).subscribe(() => {
        this.getCustomers();
      });
      setTimeout(() => {
        this.toastr.success('Customers deleted successfully');
        this.selection.clear();
      }, 1000);
    });
  }
}
