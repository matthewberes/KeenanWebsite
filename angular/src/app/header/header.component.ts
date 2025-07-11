import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ToolbarComponent, NgIf, NgFor, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  searchClicked = false;
  isEmpty = true;
  currText = "";
  pages = ["Home", "Contact Us", "About Us", "Gallery"];
  pageMap: Map<string, string> = new Map<string, string>();
  pageResults: string[] = [];

  ngOnInit(): void {
    this.pageMap.set("Home", "/home");
    this.pageMap.set("Contact Us", "/contact");
    this.pageMap.set("About Us", "/about");
    this.pageMap.set("Gallery", "/gallery");
  }

  onClick() {
    this.router.navigate(['/home']);
  }

  onSearchClick() {
    this.searchClicked = true;
  }

  searchPages() {
    const query = this.currText.trim().toLowerCase();
    this.pageResults = this.pages.filter(page =>
      page.toLowerCase().includes(query)
    );
    console.log(this.pageResults)
  }
}
