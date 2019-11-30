import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';

describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('fundamentals', () => {
  it('should return 0 if input negative', () => {
    const testComponent = new UnitTestingComponent();
    const result = testComponent.compute(-1);
    expect(result).toBe(0);
  });

  it('should increment input if it is positive', () => {
    const testComponent = new UnitTestingComponent();
    const result = testComponent.compute(1);
    expect(result).toBe(2);
  });
});

describe('Arrays and strings', () => {
  it('should include the name in the message', () => {
    const unitTest = new UnitTestingComponent();
    expect(unitTest.greet('Adam')).toContain('Adam');
  });

  it('should return the  supported  currencies', () => {
    const unitTest = new UnitTestingComponent();
    const result = unitTest.getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});

describe('VoteComponent', () => {
  let component: UnitTestingComponent;

  beforeEach(() => {
    component = new UnitTestingComponent(); // Arrange
  });

  it('should increment totalVotes when upVoted', () => {

    component.upVote(); // ACT

    expect(component.totalVotes).toBe(1); // Assert
  });

  it('should decrement totalVotes when downVoted', () => {
    component.downVote(); // ACT

    expect(component.totalVotes).toBe(-1); // Assert
  });
});
