import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  public totalVotes = 0;

  voteChanged = new EventEmitter();

  constructor() { }

  public upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  ngOnInit() {
  }

}
