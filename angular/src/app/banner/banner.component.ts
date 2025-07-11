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

}
