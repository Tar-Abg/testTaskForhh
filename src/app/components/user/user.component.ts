import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() user: User = {} as User;

  constructor() { }

  ngOnInit(): void {
  }

}
