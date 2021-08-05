import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../services/message.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  // @ts-ignore
  messages: string[];
  // @ts-ignore
  private subscriptions: Subscription = new Subscription();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.messageService.messages$.subscribe(newMessage => this.messages = newMessage)
    )
  }

}
