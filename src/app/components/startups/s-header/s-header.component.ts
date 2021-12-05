import { Component, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.css'],
})
export class SHeaderComponent implements OnInit {
  constructor() {}

  iconFleche = faArrowCircleDown;

  ngOnInit(): void {}
}
