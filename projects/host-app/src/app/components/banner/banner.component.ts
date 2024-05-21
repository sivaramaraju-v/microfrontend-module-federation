import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerText!: string;
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let urlPath = event.url;
        let pathParts = urlPath.split('/');
        let lastPart = pathParts[pathParts.length - 1];
        this.bannerText = lastPart;
      }
    });
  }
}
