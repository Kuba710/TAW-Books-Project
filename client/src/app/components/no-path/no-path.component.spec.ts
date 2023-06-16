import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPathComponent } from './no-path.component';

describe('NoPathComponent', () => {
  let component: NoPathComponent;
  let fixture: ComponentFixture<NoPathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPathComponent]
    });
    fixture = TestBed.createComponent(NoPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
