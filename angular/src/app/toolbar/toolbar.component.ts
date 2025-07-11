import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private router: Router) { }
  menuOpened: boolean = false;
  path: string = "";

  ngOnInit(): void {
    if (window.location.hash == "") {
      this.path = "/home";
    } else {
      this.path = window.location.hash;
    }
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        if (ev.url == "/") {
          this.path = "/home";
        } else {
          this.path = "" + ev.url
        }
      });
  }

  onClick(val: string) {
    this.router.navigate(['/' + val]);
    this.menuOpened = false;
  }
}
