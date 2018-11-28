import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeNav=1;
  mobileQuery: MediaQueryList;
private _mobileQueryListener: () => void;

  title = 'Angular Material: Virtual Scroll and Pagination';
  navOptions=[{id:1, name:'Virtual Scroll'},
            // {id:2, name:'Virtual Scroll'},
          {id:2, name:'Pagination: With Datasource'}];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
}


}
