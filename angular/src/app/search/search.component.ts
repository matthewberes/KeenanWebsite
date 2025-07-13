import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private router: Router) { }

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

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

  closeSearch() {
    this.searchClicked = false;
    this.currText = "";
    document.body.style.overflow = 'auto';
  }

  deleteInput() {
    this.currText = "";
  }

  pageClick(page: string) {
    this.router.navigate([this.pageMap.get(page)]);
    this.currText = "";
    this.closeSearch();
  }

  search() {
    this.router.navigate(['/search', this.currText]);
    this.currText = "";
    this.closeSearch();
  }

  searchPages() {
    const query = this.currText.trim().toLowerCase();
    this.pageResults = this.pages.filter(page =>
      page.toLowerCase().includes(query)
    );
    console.log(this.pageResults)
  }
}
