import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'shared/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProfileEditComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
