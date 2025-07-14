import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [NgIf],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(private router: Router) { }

  showBanner1 = true;
  showBanner2 = false;
  showBanner3 = false;
  currBanner = 1;
  isChangingBanner = false;

  changeBanner(value: string) {
    switch (value) {
      case "back":
        switch (this.currBanner) {
          case 1:
            this.currBanner = 3;
            this.showBanner1 = false;
            this.showBanner3 = true;
            break;
          case 2:
            this.currBanner = 1;
            this.showBanner2 = false;
            this.showBanner1 = true;
            break;
          case 3:
            this.currBanner = 2;
            this.showBanner3 = false;
            this.showBanner2 = true;
            break;
        }
        break;
      case "next":
        switch (this.currBanner) {
          case 1:
            this.currBanner = 2;
            this.showBanner1 = false;
            this.showBanner2 = true;
            break;
          case 2:
            this.currBanner = 3;
            this.showBanner2 = false;
            this.showBanner3 = true;
            break;
          case 3:
            this.currBanner = 1;
            this.showBanner3 = false;
            this.showBanner1 = true;
            break;
        }
        break;
    }
  }

  onBannerWheel(event: WheelEvent) {
    if (this.isChangingBanner) return;
    if (event.deltaX > 30) {
      this.isChangingBanner = true;
      this.changeBanner('next');
      setTimeout(() => this.isChangingBanner = false, 400);
    } else if (event.deltaX < -30) {
      this.isChangingBanner = true;
      this.changeBanner('back');
      setTimeout(() => this.isChangingBanner = false, 400);
    }
  }

  onClick() {
    this.router.navigate(['/contact']);
  }
}
