import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  items = [
    {
      id: 1,
      title: 'Angular 怎么不火呢?',
    },
    {
      id: 2,
      title: 'Angular 太牛逼了!',
    },
    {
      id: 3,
      title:
        '优秀的前端工程师和框架无关，但是 Angular 会让你更快的成为优秀前端工程师!',
    },
  ];
}
