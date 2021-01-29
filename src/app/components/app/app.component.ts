import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  skins = ['skin_1', 'skin_2', 'skin_3'];
  skinSelected = '';

  @HostBinding('class') ClassValue = '';

  changeTheme(): void {

    this.ClassValue = this.skinSelected
  }
}
