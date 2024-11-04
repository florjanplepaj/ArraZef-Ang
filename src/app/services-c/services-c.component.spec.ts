import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCComponent } from './services-c.component';

describe('ServicesCComponent', () => {
  let component: ServicesCComponent;
  let fixture: ComponentFixture<ServicesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
