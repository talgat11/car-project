import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongelsComponent } from './dongels.component';

describe('DongelsComponent', () => {
  let component: DongelsComponent;
  let fixture: ComponentFixture<DongelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
