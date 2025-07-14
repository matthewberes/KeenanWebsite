import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['/contact']);
  }

}
