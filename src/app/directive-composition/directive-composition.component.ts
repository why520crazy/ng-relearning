import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-directive-composition',
  standalone: true,
  imports: [CommonModule, ColorDirective],
  template: '<ng-content></ng-content>',
  styleUrls: ['./directive-composition.component.scss'],
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'],
    },
  ],
})
export class DirectiveCompositionComponent {}
