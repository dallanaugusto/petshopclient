import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteViewComponent } from './component';

describe('ClienteViewComponent', () => {
  let component: ClienteViewComponent;
  let fixture: ComponentFixture<ClienteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
