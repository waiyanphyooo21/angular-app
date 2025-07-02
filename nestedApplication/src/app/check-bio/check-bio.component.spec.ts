import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBioComponent } from './check-bio.component';

describe('CheckBioComponent', () => {
  let component: CheckBioComponent;
  let fixture: ComponentFixture<CheckBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
