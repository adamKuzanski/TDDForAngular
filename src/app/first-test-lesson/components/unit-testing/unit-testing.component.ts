import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.scss']
})
export class UnitTestingComponent implements OnInit {

  constructor() { }

  public totalVotes = 0;

  ngOnInit() {
  }

  public upVote(): void {
    this.totalVotes++;
  }

  public downVote(): void {
    this.totalVotes--;
  }

  public compute(value: number): number {
    if (value < 0) {
      return 0;
    }
    return value + 1;
  }

  public greet(name: string): string {
    return 'Welcome ' + name;
  }

  public getCurrencies() {
    return ['USD', 'AUD', 'EUR'];
  }

}
