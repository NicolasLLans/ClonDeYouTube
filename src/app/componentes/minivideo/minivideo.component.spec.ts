import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinivideoComponent } from './minivideo.component';

describe('MinivideoComponent', () => {
  let component: MinivideoComponent;
  let fixture: ComponentFixture<MinivideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinivideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinivideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
