import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'shared/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-general',
  templateUrl: './edit-general.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EditGeneralComponent implements OnInit {
  userForm: FormGroup;
  constructor(private toastr: ToastrService) {
    this.userForm = new FormGroup({
      firstName: new FormControl()
   });
  }

  ngOnInit() {

  }
  onSubmit() {
    this.toastr.success('Profile updated successfully');
  }
}
