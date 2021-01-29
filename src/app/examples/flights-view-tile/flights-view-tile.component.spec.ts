import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsViewTileComponent } from './flights-view-tile.component';

describe('FlightsViewTileComponent', () => {
  let component: FlightsViewTileComponent;
  let fixture: ComponentFixture<FlightsViewTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsViewTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsViewTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
