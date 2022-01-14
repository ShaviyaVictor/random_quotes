import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompQuotesComponent } from './comp-quotes.component';

describe('CompQuotesComponent', () => {
  let component: CompQuotesComponent;
  let fixture: ComponentFixture<CompQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
