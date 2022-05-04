import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningThrillComponent } from './winning-thrill.component';

describe('WinningThrillComponent', () => {
  let component: WinningThrillComponent;
  let fixture: ComponentFixture<WinningThrillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningThrillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningThrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
