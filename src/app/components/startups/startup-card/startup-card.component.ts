import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-startup-card',
  templateUrl: './startup-card.component.html',
  styleUrls: ['./startup-card.component.css'],
})
export class StartupCardComponent implements OnInit {
  @Input() startup: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.startup = changes.startup.currentValue;
  }
}
