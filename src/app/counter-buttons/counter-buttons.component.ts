import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment,reset } from '../counter/counter.actions';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
 
  // @Output() increment=new EventEmitter<void>()
  // @Output() decrement=new EventEmitter<void>()
  // @Output() reset=new EventEmitter<void>()
  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
  }
   onIncrement(){
     //this.increment.emit()
     this.store.dispatch(increment())
    }
   onDecrement(){
     //this.decrement.emit()
     this.store.dispatch(decrement())
    }
   onReset(){
     //this.reset.emit()
     this.store.dispatch(reset())

    }
}
