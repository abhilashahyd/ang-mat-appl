import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {MatDemoService} from './../mat-demo.service';

@Component({
  selector: 'app-virtual-scroll-demo',
  templateUrl: './virtual-scroll-demo.component.html',
  styleUrls: ['./virtual-scroll-demo.component.css']
})
export class VirtualScrollDemoComponent implements OnInit {
  elements : any[];

  constructor(private demoService : MatDemoService) { }

  ngOnInit() {
    this.demoService.getElements().subscribe(data=>{
      console.log(data);
      this.elements= data.elements;
    });
  }

}
