import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-socket-trial',
  templateUrl: './socket-trial.component.html',
  styleUrls: ['./socket-trial.component.css']
})
export class SocketTrialComponent implements OnInit {

  currentWeight : string = "";

  socketSubscription : Subscription;
  private subject = webSocket('ws://localhost:8765')

  constructor() { 
    this.socketSubscription = this.subject.subscribe({
      next: (value:any) => {
        console.log(value)
      },
      error: (error:any) => {
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.socketSubscription.unsubscribe();
  }

}
