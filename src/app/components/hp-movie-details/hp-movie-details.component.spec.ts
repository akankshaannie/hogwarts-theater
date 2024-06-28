import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpMovieDetailsComponent } from './hp-movie-details.component';

describe('HpMovieDetailsComponent', () => {
  let component: HpMovieDetailsComponent;
  let fixture: ComponentFixture<HpMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpMovieDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HpMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
