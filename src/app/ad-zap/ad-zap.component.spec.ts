import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdZapComponent } from './ad-zap.component';

describe('AdZapComponent', () => {
  let component: AdZapComponent;
  let fixture: ComponentFixture<AdZapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdZapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdZapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
