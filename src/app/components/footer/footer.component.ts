import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  fbicon = faFacebook;
  instaicon = faInstagram;
  linkedinicon = faLinkedin;
  twittericon = faTwitter;

  constructor() {}

  ngOnInit(): void {}
}
