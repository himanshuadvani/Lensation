import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavEffect]'
})
export class NavEffectDirective {

  constructor(private ele:ElementRef) {

   }

@HostListener('mouseenter') onmouseenter()
{
this.ele.nativeElement.style.color='black';
}

@HostListener('mouseleave') onmouseleave()
{
this.ele.nativeElement.style.color='gray';
}


}
