import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web With Angular 200';
  sub = 'Progresisve ITU Angular';

  makeUppper() {
    this.sub = this.sub.toUpperCase();
  }

  }

