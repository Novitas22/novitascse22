import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotraitComponent } from './potrait.component';

describe('PotraitComponent', () => {
  let component: PotraitComponent;
  let fixture: ComponentFixture<PotraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
