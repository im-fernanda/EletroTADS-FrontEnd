import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnderecosComponent } from './create-enderecos.component';

describe('CreateEnderecosComponent', () => {
  let component: CreateEnderecosComponent;
  let fixture: ComponentFixture<CreateEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnderecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
