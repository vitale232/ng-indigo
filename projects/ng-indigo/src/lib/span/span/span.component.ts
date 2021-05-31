import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-span',
  template: ` <span [innerText]="content" style="color: indigo"></span> `,
  styles: [],
})
export class SpanComponent {
  @Input() public content: string | null = null;
}
