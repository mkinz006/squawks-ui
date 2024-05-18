import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsFooterComponent } from './socials-footer.component';

describe('SocialsFooterComponent', () => {
  let component: SocialsFooterComponent;
  let fixture: ComponentFixture<SocialsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
