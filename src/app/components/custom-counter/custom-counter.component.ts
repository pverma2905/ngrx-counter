import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
  counterinput!:number;
  actiontype='add';
  constructor(private store:Store<{counter:CounterModel}>){

  }

  ngOnInit(): void {
      console.log("custom counter")
  }


  onCustomIncrement(){
     this.store.dispatch(customincrement({
      value:+this.counterinput,
      action:this.actiontype}))
  }

}
