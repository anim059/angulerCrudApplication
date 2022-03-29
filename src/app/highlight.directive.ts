import { Directive, ElementRef ,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight = "";

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) { }

}
