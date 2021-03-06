import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaListComponent } from './component';

describe('TurmaListComponent', () => {
  let component: TurmaListComponent;
  let fixture: ComponentFixture<TurmaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
