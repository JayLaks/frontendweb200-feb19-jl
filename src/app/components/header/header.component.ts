import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
@Input()  subheading = 'Subheading Here'; // this is a property that can be used on appcomp html
}
