import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvreDetailComponent } from './oeuvre-detail.component';

describe('OeuvreDetailComponent', () => {
  let component: OeuvreDetailComponent;
  let fixture: ComponentFixture<OeuvreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
