import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.state';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {
  counterDisplay!: number;
  channelname:string='';
  constructor(private store:Store<{counter:CounterModel}>){

  }

  ngOnInit(): void {
        this.store.select('counter').subscribe((data) => {
          // console.log("mmm",data)
        this.counterDisplay=data.count;
        this.channelname=data.channelname;
        console.log("counter display")
    });
  }

}
