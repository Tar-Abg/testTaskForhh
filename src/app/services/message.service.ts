import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // @ts-ignore
  messages$: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor() { }

  newMessage(message: string[]): void {
    this.messages$.next(message);
  }

}
