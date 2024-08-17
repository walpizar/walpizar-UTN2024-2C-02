import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCrudComponent } from './productos-crud.component';

describe('ProductosCrudComponent', () => {
  let component: ProductosCrudComponent;
  let fixture: ComponentFixture<ProductosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
