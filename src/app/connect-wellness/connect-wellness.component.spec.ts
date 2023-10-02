import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWellnessComponent } from './connect-wellness.component';

describe('ConnectWellnessComponent', () => {
  let component: ConnectWellnessComponent;
  let fixture: ComponentFixture<ConnectWellnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectWellnessComponent]
    });
    fixture = TestBed.createComponent(ConnectWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
