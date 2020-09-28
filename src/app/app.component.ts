import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  isActive = false;

  constructor(){}
  changeClass(): void{
    console.log(this.isActive);
    this.isActive = !this.isActive;
  }
}