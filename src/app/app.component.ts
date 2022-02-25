import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'OI GALERINHA '; //Define Angular como o nome

  getNumbers() {
    return [10, 0, 93, 45, 12, 9, 7];
  }
}
