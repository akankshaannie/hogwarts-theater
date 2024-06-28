import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpMoviesListComponent } from './hp-movies-list.component';

describe('HpMoviesListComponent', () => {
  let component: HpMoviesListComponent;
  let fixture: ComponentFixture<HpMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpMoviesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HpMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
