import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  stats: any = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
