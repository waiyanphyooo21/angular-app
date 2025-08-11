import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifecycleSampleComponent } from './my-lifecycle-sample.component';

describe('MyLifecycleSampleComponent', () => {
  let component: MyLifecycleSampleComponent;
  let fixture: ComponentFixture<MyLifecycleSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLifecycleSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLifecycleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
