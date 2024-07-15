import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavLinksComponent } from './bottom-nav-links.component';

describe('BottomNavLinksComponent', () => {
  let component: BottomNavLinksComponent;
  let fixture: ComponentFixture<BottomNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNavLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
