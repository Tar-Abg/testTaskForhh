import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  selectedUser: User = {} as User;

  @Input() userList: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  sortBy(keyName: string): void{
    // @ts-ignore
    this.userList = this.userList.sort((a, b) => (a[keyName] > b[keyName] ? 1 : -1))
  }

  sortByDown(keyName: string): void {
    // @ts-ignore
    this.userList = this.userList.sort((a, b) => (a[keyName] < b[keyName] ? 1 : -1))
  }
  openModalInfo = false;
  infoUser: User | undefined;
  // openInfoModal(id:false | number) {
  //   // this.infoUser
  //   this.infoUser = this.userList.find(item=>item.id==id);
  //   console.log(this.infoUser)
  // }
}
