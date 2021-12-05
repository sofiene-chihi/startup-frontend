import { Component, OnInit } from '@angular/core';
import { StartupService } from 'src/app/services/startup.service';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.css'],
})
export class StartupListComponent implements OnInit {
  startups: any = [];

  constructor(private startupService: StartupService) {}

  ngOnInit(): void {
    this.startupService.getStartups().subscribe((res: any) => {
      this.startups = res;
    });
  }
}
