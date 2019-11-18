import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNameBranchFromVietnameseComponent } from './create-name-branch-from-vietnamese.component';

describe('CreateNameBranchFromVietnameseComponent', () => {
  let component: CreateNameBranchFromVietnameseComponent;
  let fixture: ComponentFixture<CreateNameBranchFromVietnameseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNameBranchFromVietnameseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNameBranchFromVietnameseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
