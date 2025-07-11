import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SearchButtonComponent } from '../search-button/search-button.component';

@Component({
  selector: 'app-header',
  imports: [ToolbarComponent, SearchButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
