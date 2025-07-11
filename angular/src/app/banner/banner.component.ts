import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [NgIf],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  showBanner1 = true;
  showBanner2 = false;
  showBanner3 = false;
  currBanner = 1;

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
}
