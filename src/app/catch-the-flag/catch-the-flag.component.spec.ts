import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchTheFlagComponent } from './catch-the-flag.component';

describe('CatchTheFlagComponent', () => {
  let component: CatchTheFlagComponent;
  let fixture: ComponentFixture<CatchTheFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchTheFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchTheFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
