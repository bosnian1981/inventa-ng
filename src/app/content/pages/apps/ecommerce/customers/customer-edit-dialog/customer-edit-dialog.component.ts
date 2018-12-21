import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'shared/models/user';
import { UserService } from 'shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CustomerEditDialogComponent implements OnInit {
  customer: User;
  customerForm: FormGroup;
  hasFormErrors = false;
  isEditing = false;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private customerService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.customer = this.data.customer;
    if (this.data.customer.id > 0) {
      this.isEditing = true;
    }
    this.createForm();
  }

  createForm() {
    this.customerForm = this.fb.group({
      name: [this.customer.name, Validators.required],
      surname: [this.customer.surname, Validators.required],
      email: [this.customer.email, [Validators.required, Validators.email]],
      phone: [this.customer.phone, Validators.nullValidator],
      company: [this.customer.company, Validators.nullValidator],
      address: [this.customer.address, Validators.nullValidator],
      birthday: [this.customer.birthday, Validators.nullValidator],
      username: [this.customer.username, Validators.required],
      gender: [this.customer.gender, Validators.required]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    this.hasFormErrors = false;
    const controls = this.customerForm.controls;
    /** check form */
    if (this.customerForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      return;
    }

    const editedCustomer = this.prepareCustomer();
    if (editedCustomer.id > 0) {
      this.updateCustomer(editedCustomer);
    } else {
      this.createCustomer(editedCustomer);
    }
  }

  prepareCustomer(): User {
    const controls = this.customerForm.controls;
    const customer = new User();

    console.log('customer', customer);
    customer.id = this.customer.id;
    customer.birthday = controls['birthday'].value;
    customer.name = controls['name'].value;
    customer.surname = controls['surname'].value;
    customer.email = controls['email'].value;
    customer.phone = controls['phone'].value;
    customer.company = controls['company'].value;
    customer.address = controls['address'].value;
    customer.username = controls['username'].value;
    customer.gender = controls['gender'].value;

    return customer;
  }

  updateCustomer(customer: User) {
    this.customerService.updateUser(customer).subscribe(res => {
      this.dialogRef.close({
        customer,
        isEdit: true
      });
    });
  }

  createCustomer(customer: User) {
    this.customerService.addUser(customer).subscribe(res => {
      this.dialogRef.close({
        customer,
        isEdit: false
      });
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
