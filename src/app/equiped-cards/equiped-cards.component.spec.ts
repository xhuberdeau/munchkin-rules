import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipedCardsComponent } from './equiped-cards.component';

describe('EquipedCardsComponent', () => {
  let component: EquipedCardsComponent;
  let fixture: ComponentFixture<EquipedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
