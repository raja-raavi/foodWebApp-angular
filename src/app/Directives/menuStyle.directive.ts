import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[menuStyle]'
})

export class menuStyleDirective {

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onClick(){
    
     this.renderer.addClass(this.element.nativeElement, 'custom-class')
              
    }

    @HostListener('mouseout') onmouseOut(){
        this.renderer.removeClass(this.element.nativeElement, 'custom-class')
    }
}