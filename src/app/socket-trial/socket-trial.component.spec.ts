import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketTrialComponent } from './socket-trial.component';

describe('SocketTrialComponent', () => {
  let component: SocketTrialComponent;
  let fixture: ComponentFixture<SocketTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketTrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocketTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
