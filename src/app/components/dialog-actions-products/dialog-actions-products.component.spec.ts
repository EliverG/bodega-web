import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionsProductsComponent } from './dialog-actions-products.component';

describe('DialogActionsProductsComponent', () => {
  let component: DialogActionsProductsComponent;
  let fixture: ComponentFixture<DialogActionsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogActionsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogActionsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
