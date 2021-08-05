import {Component, OnInit} from '@angular/core';
import {User} from "./models/user";
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userList: User[] = [];
  isOpenAddUser = false;
  oldUserList = [];
  usersInCurrentPage: User[] = [];
  chunkedArr: any[] = []

  constructor(private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.userList = [
      {
        id: 1,
        firstName: 'Jhone',
        email: 'Jhone@gmail.com',
        lastName: 'Dhoe',
        phone: '+374-44-44-44',
        address: {
          city: 'Yerevan',
          state: 'Shengavit',
          zip: '0802',
          streetAddress: 'Paronyan'
        }
      },
      {
        id: 2,
        firstName: 'Jhone',
        email: 'Jhone@gmail.com',
        lastName: 'Dhoe',
        phone: '+374-44-44-43',
        address: {
          city: 'Yerevan',
          state: 'Shengavit',
          zip: '0802',
          streetAddress: 'Paronyan'
        }
      },
      {
        id: 3,
        firstName: 'Jhone',
        email: 'Jhone@gmail.com',
        lastName: 'Avetisyan',
        phone: '+374-44-44-44',
        address: {
          city: 'Yerevan',
          state: 'Shengavit',
          zip: '0802',
          streetAddress: 'Paronyan'
        }
      },
      {
        id: 4,
        firstName: 'Jhone',
        email: 'Jhone@gmail.com',
        lastName: 'Dhoe',
        phone: '+374-44-44-44',
        address: {
          city: 'Yerevan',
          state: 'Shengavit',
          zip: '0802',
          streetAddress: 'Shahinyan'
        }
      },
      {
        id: 5,
        firstName: 'Arman',
        email: 'Jhone@gmail.com',
        lastName: 'Dhoe',
        phone: '+374-44-44-54',
        address: {
          city: 'Yerevan',
          state: 'Shengavit',
          zip: '0802',
          streetAddress: 'Paronyan'
        }
      },
      {
        id: 6,
        firstName: 'Babken',
        email: 'Jhone@gmail.com',
        lastName: 'Dhoe',
        phone: '+374-44-44-44',
        address: {
          city: 'Yerevan',
          state: 'Shengavit',
          zip: '0802',
          streetAddress: 'Paronyan'
        }
      }
    ];
    // @ts-ignore
    this.oldUserList = this.userList;
    localStorage.setItem('UserList', JSON.stringify(this.userList));
    this.chunkedArr = this.sliceIntoChunks(this.userList, 5);
    this.usersInCurrentPage = this.chunkedArr[0]

  }

  addNewUser(user: User): void {
    const isUserIsExist = Boolean(this.userList.filter(item => item.id == user.id).length);
    if (!isUserIsExist) {
      this.userList.push(user);
      localStorage.setItem('UserList', JSON.stringify(this.userList))
    } else {
      this.messageService.newMessage(['entered id is exist'])
    }
    this.chunkedArr =  this.sliceIntoChunks(this.userList, 5);
  }

  splitString(value: string, searchVal: string) {
    let str = value.split('');
    let newStr = '';
    let isVal = false;
    for (let key of str) {
      newStr += key;
      if (newStr.toLowerCase().includes(searchVal.toLowerCase())) {
        isVal = true;
        break;
      }
    }
    return isVal;
  }

  searchValue(value: string) {
    this.userList = this.oldUserList;
    let newUser: any[];
    newUser = [];
    this.userList.map((item) => {
      if (this.splitString(item.firstName, value)
        || this.splitString(item.id.toString(), value)
        || this.splitString(item.email, value)
        || this.splitString(item.lastName, value)
        || this.splitString(item.phone, value)) {
        newUser.push(item);
      }

    })
    this.usersInCurrentPage = newUser;

  }

  changePage(pageIndex: number) {
    this.usersInCurrentPage = this.chunkedArr[pageIndex-1]
  }

  sliceIntoChunks(arr: User[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }
}
