import { Component, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats-header',
  templateUrl: './stats-header.component.html',
  styleUrls: ['./stats-header.component.css'],
})
export class StatsHeaderComponent implements OnInit {
  iconFleche = faArrowCircleDown;

  constructor() {}

  ngOnInit(): void {}
}
