import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnderecosComponent } from './update-enderecos.component';

describe('UpdateEnderecosComponent', () => {
  let component: UpdateEnderecosComponent;
  let fixture: ComponentFixture<UpdateEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEnderecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
