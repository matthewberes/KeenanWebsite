import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ToolbarComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }
  searchClicked = false;
  notEmpty = true;

  onClick() {
    this.router.navigate(['/home']);
  }

  onSearchClick() {
    this.searchClicked = true;
  }
}
