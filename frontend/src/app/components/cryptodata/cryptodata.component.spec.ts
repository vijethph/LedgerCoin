import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptodataComponent } from './cryptodata.component';

describe('CryptodataComponent', () => {
  let component: CryptodataComponent;
  let fixture: ComponentFixture<CryptodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
