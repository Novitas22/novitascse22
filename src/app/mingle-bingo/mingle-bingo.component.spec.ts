import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingleBingoComponent } from './mingle-bingo.component';

describe('MingleBingoComponent', () => {
  let component: MingleBingoComponent;
  let fixture: ComponentFixture<MingleBingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MingleBingoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MingleBingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
