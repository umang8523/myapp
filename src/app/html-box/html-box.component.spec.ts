import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBoxComponent } from './html-box.component';

describe('HtmlBoxComponent', () => {
  let component: HtmlBoxComponent;
  let fixture: ComponentFixture<HtmlBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
