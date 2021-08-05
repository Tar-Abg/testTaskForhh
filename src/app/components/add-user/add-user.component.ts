import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() addNewUser: EventEmitter<User> = new EventEmitter<User>();
  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required]],
      address: this.fb.group({
        streetAddress : [null, [Validators.required]],
        city: [null, [Validators.required]],
        state: [null, [Validators.required]],
        zip: [null, [Validators.required]],
      }),
      description : [null],
    })
  }

  onCloseModal(): void{
    this.closeModal.emit();
  }
  addUser(): void {
    if (this.form.valid) {
      this.addNewUser.emit(this.form.value);
      this.closeModal.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }

  validateId(event: Event) {
    // event.preventDefault();
    // @ts-ignore
    //
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode!=8) {
      event.preventDefault();
    }
  }
}
