import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoEditComponent } from './component';

describe('EnderecoEditComponent', () => {
  let component: EnderecoEditComponent;
  let fixture: ComponentFixture<EnderecoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
