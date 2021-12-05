import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temoignages',
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.css'],
})
export class TemoignagesComponent implements OnInit {
  temoignages: any = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit(): void {}
}
