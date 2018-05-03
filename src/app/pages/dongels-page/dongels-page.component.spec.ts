import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongelsPageComponent } from './dongels-page.component';

describe('DongelsPageComponent', () => {
  let component: DongelsPageComponent;
  let fixture: ComponentFixture<DongelsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongelsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
