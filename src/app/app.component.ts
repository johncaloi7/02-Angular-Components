import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'nature',
      content: 'I saw this mountain today.',
    },
    {
      title: 'Mountain Bike',
      imageUrl: 'assets/biking.jpeg',
      username: 'nature',
      content: 'I saw this bike today.',
    },
  ];
}
