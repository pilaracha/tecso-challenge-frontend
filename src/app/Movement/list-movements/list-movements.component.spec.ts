import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovementsComponent } from './list-movements.component';

describe('ListMovementsComponent', () => {
  let component: ListMovementsComponent;
  let fixture: ComponentFixture<ListMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
