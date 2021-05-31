import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-paragraph',
  template: ` <p [innerHtml]="content" style="color: indigo"></p>`,
  styles: [],
})
export class ParagraphComponent {
  @Input() public content: string | null = null;
}
