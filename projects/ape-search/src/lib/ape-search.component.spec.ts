import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApeSearchComponent } from './ape-search.component';

describe('ApeSearchComponent', () => {
  let component: ApeSearchComponent;
  let fixture: ComponentFixture<ApeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
