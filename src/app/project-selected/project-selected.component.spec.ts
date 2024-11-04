import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSelectedComponent } from './project-selected.component';

describe('ProjectSelectedComponent', () => {
  let component: ProjectSelectedComponent;
  let fixture: ComponentFixture<ProjectSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
