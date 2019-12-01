import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('VoteComponent functions', () => {
  const component = new VoteComponent();
  it('Should rase voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);

    component.upVote();

    // expect(totalVotes).not.toBeNull();

    expect(totalVotes).toBe(1);

  });
});
