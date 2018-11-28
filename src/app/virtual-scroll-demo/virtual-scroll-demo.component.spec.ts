import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollDemoComponent } from './virtual-scroll-demo.component';

describe('VirtualScrollDemoComponent', () => {
  let component: VirtualScrollDemoComponent;
  let fixture: ComponentFixture<VirtualScrollDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
